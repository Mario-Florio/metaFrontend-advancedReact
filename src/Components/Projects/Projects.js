import "./Projects.css";
import { projects } from "../../projects";

function Projects() {

    return(
        <section className="Projects" id="projects">
            <h3>Featured Projects</h3>
            <div className="Projects__grid">
                {projects.map(project => <Project key={project.name} project={project}/>)}
            </div>
        </section>
    );
}

export default Projects;

function Project(props) {
    const { name, desc, img, link } = props.project;
    return(
        <article className="Projects__card">
            <img src={img} alt="project pic"/>
            <h4>{name}</h4>
            <p>{desc}</p>
            <a href="https://github.com" target="_blank" rel="noreferrer">See more →</a>
        </article>
    );
}