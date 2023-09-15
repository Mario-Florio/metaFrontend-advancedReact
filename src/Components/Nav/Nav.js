import "./Nav.css";

function Nav() {

    return(
        <nav className="Nav">
            <ul>
                <li><a href="https://github.com/Mario-Florio">Github</a></li>
            </ul>
            <ul>
                <li><a 
                    href="#about"
                >
                    About
                </a></li>
                <li><a 
                    href="#projects"
                >
                    Projects
                </a></li>
                <li><a 
                    href="#contact"
                >
                    Contact
                </a></li>
            </ul>
        </nav>
    );
}

export default Nav;