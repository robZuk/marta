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
      <Form
        name="contact"
        method="post"
        enctype="text/plain"
        data-netlify=" true"
        data-netlify-honeypot="bot-field"
      >
        Name:
        <input type="text" name="name" placeholder="Twoje Imię"></input>
        E-mail
        <input type="text" name="mail"></input>
        Comment:
        <input type="text" name="comment" size="50"></input>
        <input type="submit" value="Send"></input>
        <input type="reset" value="Reset"></input>
      </Form>
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
