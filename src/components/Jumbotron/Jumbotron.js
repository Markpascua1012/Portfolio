import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from "../NavBar/Nav";
import "./Jumbotron.css";


const JumbotronPage = () => {
  return (
    <div>
    <Jumbotron>

    <div className="textJumbo">
        <h1 className="display-4 hello">H e l l o . </h1>
        <p className="lead fontOne">I'm Mark Pascua</p>
        <p>I'm a Full-Stack Web Developer.</p>
        <a className="btn btn-primary btn-lg bg-dark" href="#ABOUTME" role="button">About Me</a>
    </div>
</Jumbotron>
<div className="Navie">
<Nav />

</div>
</div>
  )
}

export default JumbotronPage;