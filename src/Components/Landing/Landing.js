import "./Landing.css";
import profilePic from "../../images/profile-pic.jpeg";

function Landing() {

    return(
        <section className="Landing" id="about">
            <img src={profilePic} alt="profile pic"/>
            <h2>Hello, I am Mario!</h2>
            <h1>A frontend developer</h1>
        </section>
    );
}

export default Landing;