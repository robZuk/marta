import * as React from "react";
import Main from "../Components/Main";

const IndexPage = () => {
  return;
  <>
    <Main />
    <form
      name="contact"
      method="post"
      data-netlify=" true"
      data-netlify-honeypot="bot-field"
    >
      Name:
      <input type="text" name="name" placeholder="Twoje Imię"></input>
      <button type="submit">Send</button>
    </form>
  </>;
};

export default IndexPage;
