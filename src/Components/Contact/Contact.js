import "./Contact.css";
import useSubmit from "../../hooks/useSubmit";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

function Contact() {
    const [reqResolv, setReqResolv] = useState(false);
    const { isLoading, response, submit } = useSubmit();

    useEffect(() => {
        response && setReqResolv(true);
        response && response.type === 'success' && resetForm();
    }, [response]);

    useEffect(() => {
        let popUpTimer = setTimeout(() => {
            setReqResolv(false);
        }, 5000);
        return () => clearTimeout(popUpTimer);
    }, [reqResolv]);

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        resetForm
    } = useFormik({
        initialValues: {
            name: "",
            email: "",
            enquiry: "Freelance project proposal",
            msg: "",
        },
        onSubmit: values => {
            !isLoading && submit("url", values);
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required'),
            email: Yup.string().required('Required'),
            enquiry: Yup.string().required('Required'),
            msg: Yup.string()
                .min(25, 'Must be at least 25 characters')
                .required('Required'),
        })
    });

    return(
        <section className="Contact" id="contact">
            {reqResolv && <PopUp response={response}/>}
            <h3>Contact Me</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                </label>
                <input 
                    type="text" 
                    name="name"
                    id="name"
                    autoComplete="on"
                    className={touched.name && errors.name && "invalid"}
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.name && errors.name && <p className="errorMsg">{errors.name}</p>}
                <label htmlFor="email">
                    Email Address
                </label>
                <input 
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="on"
                    className={touched.email && errors.email && "invalid"}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.email && errors.email && <p className="errorMsg">{errors.email}</p>}
                <label htmlFor="enquiry">
                    Type of enquiry
                </label>
                <select 
                    name="enquiry"
                    id="enquiry"
                    className={touched.enquiry && errors.enquiry && "invalid"}
                    value={values.enquiry}
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <option>Freelance project proposal</option>
                </select>
                {touched.enquiry && errors.enquiry && <p className="errorMsg">{errors.enquiry}</p>}
                <label htmlFor="msg">
                    Your message
                </label>
                <textarea
                    name="msg"
                    id="msg"
                    className={touched.msg && errors.msg && "invalid"}
                    value={values.msg}
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                {touched.msg && errors.msg && <p className="errorMsg">{errors.msg}</p>}
                <button type="submit">Submit<Loader isLoading={isLoading}/></button>
            </form>
        </section>
    )
}

export default Contact;

function Loader(props) {
    const { isLoading } = props;

    return <div className={isLoading ? "loader--active" : "loader--inactive"}></div>
}

function PopUp(props) {
    const [isActive, setIsActive] = useState(false);

    const { response } = props;

    useEffect(() => {
        setIsActive(true);
        let timer = setTimeout(() => {
            setIsActive(false);
        }, 4700);

        return () => clearTimeout(timer);
    }, []);

    return(
            <div 
                className={isActive ? "popUp--active" : "popUp--inactive"} 
                style={{
                    backgroundColor: response.type === 'success' ? 'rgb(180, 250, 180)' : 'rgb(900, 150, 150)'
                }}
            >
                <h5>{response.type === 'success' ? 'All good!' : 'Oops!'}</h5>
                <p>{response.message}</p>
            </div>
    );
}