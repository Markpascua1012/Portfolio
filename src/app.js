import React from "react";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import AboutMe from "./components/AboutMe/AboutMe"
import TitleCards from "./components/TitleCards/TitleCards";
import TitleCards2 from "./components/TitleCards2/TitleCards2";
import Projects from "./components/Projects/projects";
import "./app.css";


function App() {
    return (
        <div>
            <Jumbotron />
            <TitleCards txt="About Me"  />
            <AboutMe />
            <TitleCards2 txt="Projects" />
            <Projects />
            <TitleCards txt="Contact" />
        </div>
    );
}

export default App;
