import React from "react";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import AboutMe from "./components/AboutMe/AboutMe"
import TitleCards from "./components/TitleCards/TitleCards";
import TitleCards2 from "./components/TitleCards2/TitleCards2";
import Projects from "./components/Projects/projects";
import Contact from "./components/contact/contact"

import "./app.css";


function App() {
    return (
        <div>
            <a id="HOME"></a>
            <Jumbotron />
            <a id="ABOUTME"></a>
            <TitleCards txt="About Me"  />
            <AboutMe />
            <a id="PROJECTS"></a>
            <TitleCards2 txt="Projects" />
            <Projects />
            <a id="CONTACT"></a>
            <TitleCards txt="Contact"  />
            <Contact />
        </div>
    );
}

export default App;
