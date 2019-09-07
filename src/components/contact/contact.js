import React from "react";
import Formspree from "./formspree";
import "./contact.css";


const contact = () => {
  return (
    <div className="abCont3">
            <br></br>

      <Formspree />
      <div className="contactIcons">
      <div className="emailIcon">
      <i class="far fa-envelope">&nbsp;MarkPascua1012@Gmail.com</i> 
      
      </div>
      <div className="linkedinIcon">
      <a href="https://linkedin.com/in/markpascua1012/">
      <i class="fab fa-linkedin">&nbsp;https://linkedin.com/in/markpascua1012/</i> 
      </a>
      </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

    </div>

  )
}

export default contact;