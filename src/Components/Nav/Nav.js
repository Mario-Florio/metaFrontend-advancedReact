import "./Nav.css";
import { useState, useEffect } from "react";

function Nav() {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
            if (window.scrollY > lastScrollY) {
                setShow(false); 
            } else {
                setShow(true);  
            }
            setLastScrollY(window.scrollY); 
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);
        
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            }
        }
    }, [lastScrollY]);

    return(
        <header className={show ? "active" : "hidden"}>
            <nav className="Nav">
                <ul>
                    <li><GitHubLink/></li>
                    <li><LinkedInLink/></li>
                    <li><TwitterLink/></li>
                    <li><FacebookLink/></li>
                    <li><StackOverflowLink/></li>
                </ul>
                <ul>
                    <li><a href="#projects">
                        Projects
                    </a></li>
                    <li><a href="#contact">
                        Contact Me
                    </a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;

function GitHubLink() {
    return(
        <a href="https://github.com/" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="white" width="30px" height="30px">
                <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"/>
            </svg>
        </a>
    );
}

function LinkedInLink() {
    return(
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="white" width="30px" height="30px">
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"/>
            </svg>    
        </a>
    );
}

function TwitterLink() {
    return(
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="white" width="30px" height="30px">
                <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"/>
            </svg>    
        </a>
    );
}

function FacebookLink() {
    return(
        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="white" width="30px" height="30px">
                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/>
            </svg>    
        </a>
    );
}

function StackOverflowLink() {
    return(
        <a href="https://stackoverflow.com/" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="white" width="30px" height="30px">
                <path fillRule="evenodd" d="M 40.925781 1.890625 L 37.859375 2.417969 L 41.1875 20.625 L 44.03125 20.253906 Z M 29.96875 6.351563 L 27.101563 8.078125 L 37.300781 23.035156 L 39.820313 21.480469 Z M 20.796875 15.03125 L 19.113281 17.703125 L 34.5 27 L 35.902344 24.578125 Z M 16.375 24.402344 L 15.628906 27.402344 L 33.359375 31.894531 L 33.640625 29.203125 Z M 9 29 L 9 47.984375 L 38.902344 48 L 38.902344 47.984375 C 38.933594 47.984375 39 29 39 29 L 36 29 L 36 45 L 12 45 L 12 29 Z M 15.152344 32.355469 L 14.902344 35.339844 L 33 37 L 33.203125 34.5 Z M 14.902344 39 L 15 42 L 33 41.929688 L 33 39 Z"/>
            </svg>    
        </a>
    );
}