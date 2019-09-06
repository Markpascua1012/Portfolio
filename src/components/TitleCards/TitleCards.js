import React from "react";
import "./TitleCards.css";


const TitleCards = (props) => {
    return (
        <div className="contDiv" >
            <br></br>
            <br></br>
            <br></br>
            <h2 className="Title">{props.txt}</h2>
            <hr className="ayche"></hr>
            <br></br>
        </div>
    )
}


export default TitleCards;