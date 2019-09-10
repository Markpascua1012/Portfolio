import React from "react";
import Avatar from "../imageAvatar/ImageAvatar";
import AboutText from "./aboutText"
import "./AboutMe.css";


const AboutMe = () => {
  return (
    <div className="abCont" >
            <br></br>


      <div className="avatar">
      <Avatar />
      </div>
      <div className="aboutTxt">

      <AboutText />
      </div>
      <br></br>
      <br></br>
      <br></br>


    </div>

  )
}

export default AboutMe;