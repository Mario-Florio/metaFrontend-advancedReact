import project1Img from "./images/photo1.jpg";
import project2Img from "./images/photo2.jpg";
import project3Img from "./images/photo3.jpg";
import project4Img from "./images/photo4.jpg";

class Project {
    constructor(name, desc, img, link) {
        this.name = name;
        this.desc = desc;
        this.img = img;
        this.link = link;
    }
}

let project1 = new Project(
    "Project 1", 
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam sed at.",
    project1Img
);

let project2 = new Project(
    "Project 2", 
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam sed at.",
    project2Img
);

let project3 = new Project(
    "Project 3", 
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam sed at.",
    project3Img
);

let project4 = new Project(
    "Project 4", 
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo aliquam sed at.",
    project4Img
);

export let projects = [ project1, project2, project3, project4 ];