import React from "react";
import MainTemplate from "../templates/MainTemplate";
//import Button from "../Components/Button";
//import { Link } from "gatsby";
import { graphql } from "gatsby";
import Img from "gatsby-image";

const Contact = ({ data }) => {
  return (
    <MainTemplate>
      <Img fixed={data.file.childImageSharp.fixed} />
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
