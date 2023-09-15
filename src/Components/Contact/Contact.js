import "./Contact.css";
import { useForm } from "react-hook-form";

function Contact() {
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
        reset();
    }

    return(
        <section className="Contact">
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