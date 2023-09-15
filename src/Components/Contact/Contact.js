import { useEffect, useState } from "react";
import "./Contact.css";
import { useForm } from "react-hook-form";

function Contact() {
    const [name, setName] = useState("");
    const [isSuccess, setIsSuccess] = useState(null);
    const [popUp, setPopUp] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPopUp(false);
        }, 5000)
    }, [popUp]);

    const { 
        register, 
        handleSubmit, 
        reset,
        formState: { errors } 
    } = useForm();

    const submit = (data, e) => {
        e.preventDefault();
        let contactInfo = {
            name: data.name,
            email: data.email,
            msg: data.msg
        }
        setName(contactInfo.name);
        setIsSuccess(true);
        setPopUp(true);
        reset();
    }

    return(
        <section className="Contact">
            {popUp && <PopUp isSuccess={isSuccess} name={name}/>}
            <h3>Contact Me</h3>
            <form onSubmit={handleSubmit((data, e) => submit(data, e))}>
                <label htmlFor="name">
                    Name
                </label>
                <input 
                    type="text" 
                    name="name"
                    id="name"
                    autoComplete="on"
                    className={errors.name && "invalid"}
                    {...register("name",
                        {
                            required: "Please fill in name!"
                        }
                    )}
                />
                {errors.name && <p className="errorMsg">{errors.name.message}</p>}
                <label htmlFor="email">
                    Email Address
                </label>
                <input 
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="on"
                    className={errors.email && "invalid"}
                    {...register("email",
                        {
                            required: "Please fill in email!"
                        }
                    )}
                />
                {errors.email && <p className="errorMsg">{errors.email.message}</p>}
                <label htmlFor="msg">
                    Your message
                </label>
                <textarea
                    name="msg"
                    id="msg"
                    className={errors.msg && "invalid"}
                    {...register("msg",
                        {
                            required: "Please leave a message!"
                        }
                    )}
                />
                {errors.msg && <p className="errorMsg">{errors.msg.message}</p>}
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </section>
    );
}

export default Contact;

function PopUp(props) {
    const { isSuccess, name } = props;

    return(
        isSuccess ? 
            <div className="popUp" style={{backgroundColor: "rgb(180, 250, 180)"}}>
                <h5>Thanks for your submission {name}!</h5>
                <p>We will get back to you shortly!</p>
            </div>
            :
            <div className="popUp" style={{backgroundColor: "rgb(241, 176, 176)"}}>
                <h5>Oops!</h5>
                <p>Something went wrong, please try again!</p>
            </div>
    )
}