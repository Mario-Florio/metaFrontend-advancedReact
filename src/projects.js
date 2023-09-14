import bugTrackerImg from "./bugTracker.png";

class Project {
    constructor(name, desc, img, link) {
        this.name = name;
        this.desc = desc;
        this.img = img;
        this.link = link;
    }
}

export let bugTracker = new Project(
    "Bug Tracker", 
    "Track and manage bugs encountered on your projects.",
    bugTrackerImg,
    "https://github.com/Mario-Florio/bug-tracker"
    )
