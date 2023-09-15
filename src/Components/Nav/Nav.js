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
                    <li><a href="https://github.com/Mario-Florio">Github</a></li>
                </ul>
                <ul>
                    <li><a href="#about">
                        About
                    </a></li>
                    <li><a href="#projects">
                        Projects
                    </a></li>
                    <li><a href="#contact">
                        Contact
                    </a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;