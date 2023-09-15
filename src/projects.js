import bugTrackerImg from "./images/bugTracker.png";
import simpleCalcImg from "./images/simpleCalc.png";
import littleLemonImg from "./images/littleLemon.png";
import weatherAppImg from "./images/weatherApp.png";

class Project {
    constructor(name, desc, img, link) {
        this.name = name;
        this.desc = desc;
        this.img = img;
        this.link = link;
    }
}

let bugTracker = new Project(
    "Bug Tracker", 
    "Track and manage bugs encountered on your projects.",
    bugTrackerImg,
    "https://github.com/Mario-Florio/bug-tracker"
);

let simpleCalc = new Project(
    "Simple Calculator",
    "Perform basic calculations.",
    simpleCalcImg,
    "https://github.com/Mario-Florio/metaFrontend-reactBasics"
);

let littleLemon = new Project(
    "Little Lemon homepage",
    "A simple homepage for a mock restaurant, Little Lemon.",
    littleLemonImg,
    "https://github.com/Mario-Florio/metaFrontend-htmlCss"
);

let weatherApp = new Project(
    "Weather App",
    "A basic weather app which allows user to access weather data via city or zip code.",
    weatherAppImg,
    "https://github.com/Mario-Florio/weather-app"
);

export let projects = [ bugTracker, weatherApp, simpleCalc, littleLemon ];