import "./Contact.css";
import useSubmit from "../../hooks/useSubmit";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";

function Contact() {
    const [popUp, setPopUp] = useState(false);
    const [name, setName] = useState(null);

    useEffect(() => {
        let popUpTimer = setTimeout(() => {
            setPopUp(false);
        }, 5000);
        return () => clearTimeout(popUpTimer);
    });

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
            setName(values.name);
            setPopUp(true);
            resetForm();
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
            {popUp && <PopUp isSuccess={true} name={name}/>}
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
                <button type="submit">Submit<LoadSpinner/></button>
            </form>
        </section>
    )
}

export default Contact;

function LoadSpinner() {

}

function PopUp(props) {
    const [isActive, setIsActive] = useState(false);

    const { isSuccess, name } = props;

    useEffect(() => {
        setIsActive(true);
        let timer = setTimeout(() => {
            setIsActive(false);
        }, 4700);

        return () => clearTimeout(timer);
    }, []);

    return(
        isSuccess ? 
            <div className={isActive ? "popUp--active" : "popUp--inactive"} style={{backgroundColor: "rgb(180, 250, 180)"}}>
                <h5>Thanks for your submission {name}!</h5>
                <p>We will get back to you shortly!</p>
            </div>
            :
            <div className="popUp" style={{backgroundColor: "rgb(241, 176, 176)", opacity: "0"}}>
                <h5>Oops!</h5>
                <p>Something went wrong, please try again!</p>
            </div>
    )
}