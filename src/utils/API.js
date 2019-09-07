import axios from "axios";

export default {


  formspree: function(message) {
    return axios.post("https://formspree.io/markpascua1012@gmail.com",message)
  }

};
