import React from "react";
import "./TitleCards.css";


const TitleCards = (props) => {
    return (
        <div className="contDiv2" >
            <br></br>
            <br></br>
            <br></br>
            <h2 className="Title">{props.txt}</h2>
            <hr className="ayche2"></hr>
            <br></br>
        </div>
    )
}


export default TitleCards;