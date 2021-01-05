import React from "react";
import MainTemplate from "../templates/MainTemplate";
import Button from "../Components/Button";
import Title from "../Components/Title";
import Paragraph from "../Components/Paragraph";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #cec1b9;
`;

const StyledTitle = styled(Title)`
  /* display: flex;
  justify-content: end;
  margin-top: 3%;
  margin-left: 50%; */
  /* position: absolute;
  top: 2%;
  right: 3%;
  color: black; */
`;
const StyledInnerContainer = styled.div`
  position: absolute;
  //top: 10%;
  /* width: 80%; */
  width: 100%;
  height: 100vh;
  display: grid;
  overflow: hidden;

  /* margin: 0 10%; */
  grid-template-columns: 50% 50%;
  //grid-template-rows: 1fr 1fr;

  background-color: white;
  box-shadow: inset 0 0 20px gray;
`;

const StyledLeftSide = styled(Img)`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left bottom;
  width: 100%;
  height: 100%;
`;
const StyledRightSide = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  align-items: center;
  justify-items: center;
  /* padding-right: 5%; */
  box-shadow: -10px 10px -10px gray;
`;

const StyledParagraph = styled(Paragraph)`
  /* margin-top: 5%; */
`;

const StyledButton = styled(Button)`
  position: absolute;
  bottom: 3%;
  right: 8%;
`;

const AboutMe = ({ data }) => {
  const img = data.file.childImageSharp.fluid;

  return (
    <MainTemplate>
      <StyledContainer>
        <StyledInnerContainer>
          <StyledLeftSide fluid={img}></StyledLeftSide>
          <StyledRightSide>
            <StyledTitle>o mnie</StyledTitle>
            <StyledParagraph>
              Lorem ipsum dolor sit amet, in usu hinc albucius corrumpit, duo
              feugiat accusamus in. Sed ne impetus aperiri definitionem, quo
              noster nostro sensibus ne. Convenire tincidunt his te, cum ex
              iracundia cotidieque. Vel ei integre saperet sensibus, sit ne
              dolore reprimique.
            </StyledParagraph>
            <StyledButton as={Link} to="/">
              <i className="fas fa-backward"></i>
            </StyledButton>
          </StyledRightSide>
        </StyledInnerContainer>
      </StyledContainer>
    </MainTemplate>
  );
};

export default AboutMe;

export const query = graphql`
  query {
    file(relativePath: { eq: "marta.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 500, quality: 90) {
          ...GatsbyImageSharpFluid
          ...GatsbyImageSharpFluidLimitPresentationSize
        }
      }
    }
  }
`;
