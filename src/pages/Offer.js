import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplate";

import BackgroundImage from "gatsby-background-image";

const BackgroundSection = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "img2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        desktop1: file(relativePath: { eq: "img3.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid;
  const imageData1 = data.desktop1.childImageSharp.fluid;
  console.log(imageData);
  console.log(imageData1);
  return (
    <>
      <MainTemplate>
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        ></BackgroundImage>
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData1}
          backgroundColor={`#040e18`}
        ></BackgroundImage>
      </MainTemplate>
    </>
  );
};

const StyledBackgroundSection = styled(BackgroundSection)`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 50%;
  width: 100%;
`;

export default StyledBackgroundSection;
