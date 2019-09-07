import React from "react";
import "./contact.css";
import Textfield from "./textfield";
import EmailForm from "./emailform";
import MButton from "./mbutton"


const contact = () => {
  return (
    <div className="formCont">
<form method="POST" action="https://formspree.io/markpascua1012@gmail.com">
  <div className="emailDiv">
  <EmailForm />
  </div>

  <div className="textDiv">
  <Textfield />
  </div>

  <MButton />
</form>
    </div>

  )
}

export default contact;