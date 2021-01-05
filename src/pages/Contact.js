import React from "react";
import MainTemplate from "../templates/MainTemplate";

import styled from "styled-components";

const Contact = () => {
  return (
    <form
      name="contact-form"
      action="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input name="name" placeholder="Your Name" type="text" />
      <input name="email" placeholder="name@name.com" type="email" />
      <textarea name="message" />
      <button>Send</button>
    </form>
  );
};

export default Contact;
