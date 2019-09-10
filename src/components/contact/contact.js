import React from "react";
import Formspree from "./formspree";
import IconButton from '@material-ui/core/IconButton';
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
      &nbsp;
      <IconButton href="https://linkedin.com/in/markpascua1012/" aria-label="share">
      <i class="fab fa-linkedin"></i> 
      </IconButton>
      &nbsp;
      <IconButton href="https://github.com/Markpascua1012" aria-label="share">
      <i class="fab fa-github-square"></i>
      </IconButton>
      &nbsp;
      <IconButton href="https://www.instagram.com/markypoo_thefishes/" aria-label="share">
      <i class="fab fa-instagram"></i>
      </IconButton>
      &nbsp;
      <IconButton href="https://www.facebook.com/MarkPascua1012" aria-label="share">
      <i class="fab fa-facebook-square"></i>
      </IconButton>
      </div>
      </div>

      <br></br>
      <br></br>
      <br></br>

    </div>

  )
}

export default contact;