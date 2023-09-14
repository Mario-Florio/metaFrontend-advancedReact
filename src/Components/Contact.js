
function Contact() {

    return(
        <section className="Contact">
            <h3>Contact Me</h3>
            <form onSubmit={e => e.preventDefault()}>
                <label>Name</label>
                <input type="text"/>
                <label>Email Address</label>
                <input type="text"/>
                <label>Type of enquiry</label>
                <input type=""/>
                <label>Your message</label>
                <textarea/>
                <button>Submit</button>
            </form>
        </section>
    );
}

export default Contact;