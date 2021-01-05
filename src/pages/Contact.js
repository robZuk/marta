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

const Contact = ({ data }) => {
  return (
    <MainTemplate>
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
    </MainTemplate>
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
