import { useState } from "react";

function Contact() {
    const [name, setName] = useState(null);
    const [nameInput, setNameInput] = useState("");

    const [email, setEmail] = useState(null);
    const [emailInput, setEmailInput] = useState("");

    const [msg, setMsg] = useState(null);
    const [msgInput, setMsgInput] = useState("");

    const handleNameChange = e => {
        setNameInput(e.target.value);
    }

    const handleEmailChange = e => {
        setEmailInput(e.target.value);
    }

    const handleMsgChange = e => {
        setMsgInput(e.target.value);
    }

    const handleSubmit = () => {
        setName(nameInput);
        setEmail(emailInput);
        setMsg(msgInput);
        setNameInput("");
        setEmailInput("");
        setMsgInput("");
    }

    return(
        <section className="Contact">
            <h3>Contact Me</h3>
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="name" id="name">
                    Name
                </label>
                <input 
                    type="text" 
                    name="name"
                    id="name"
                    value={nameInput} 
                    onChange={handleNameChange}
                />
                <label htmlFor="email" id="email">
                    Email Address
                </label>
                <input 
                    type="text"
                    name="email"
                    id="email"
                    value={emailInput}
                    onChange={handleEmailChange}
                    />
                <label htmlFor="msg" id="msg">
                    Your message
                </label>
                <textarea
                    name="msg"
                    id="msg"
                    value={msgInput}
                    onChange={handleMsgChange}
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </section>
    );
}

export default Contact;