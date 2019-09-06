import React from "react";

import "./contact.css";


const contact = () => {
  return (
    <div>
<form method="POST" action="https://formspree.io/markpascua1012@gmail.com">
  <input type="email" name="email" placeholder="Your email" />
  <textarea name="message" placeholder="Test Message"></textarea>
  <button type="submit">Send Test</button>
</form>
    </div>

  )
}

export default contact;