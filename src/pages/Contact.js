import React from "react";
import MainTemplate from "../templates/MainTemplate";
//import Button from "../Components/Button";
//import { Link } from "gatsby";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";

const Form = styled.form`
  margin-top: 20%;
`;

const Contact = () => {
  return (
    <form
      name="contact-form"
      method="post"
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

export const query = graphql`
  query {
    file(relativePath: { eq: "img2.jpg" }) {
      childImageSharp {
        fixed(width: 500, height: 500) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
