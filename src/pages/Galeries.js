import React, { useState } from "react";
import MainTemplate from "../templates/MainTemplate";
import styled from "styled-components";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const Container = styled.div`
  background-color: rgb(30, 30, 30);
  height: auto;
  width: 100vw;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media ${({ theme }) => theme.breakpoints.laptopM} {
    width: 80%;
    margin: 0 auto;
  }
`;

const StyledWrapperGallery = styled.div`
  display: grid;
  margin-top: 10vh;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 10px;
  @media ${({ theme }) => theme.breakpoints.mobileS} {
    grid-template-columns: 1fr;
  }
  @media ${({ theme }) => theme.breakpoints.mobileL} {
    grid-template-columns: 1fr 1fr;
  }
  @media ${({ theme }) => theme.breakpoints.laptop} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media ${({ theme }) => theme.breakpoints.laptopM} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media ${({ theme }) => theme.orientation.landscape} {
    margin-top: 12vh;
  }
`;

const StyledBackgroundImg = styled(BackgroundImage)`
  width: 300px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  cursor: pointer;
`;

const StyledBackgroundImgSlider = styled(BackgroundImage)`
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`;

const SliderContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  display: ${({ showSliderContainer }) =>
    `${showSliderContainer ? `flex` : `none`}`};
  justify-content: center;
  align-items: center;
  z-index: 100;
  & i {
    position: absolute;
    color: white;
    right: 2%;
    top: 2%;
    cursor: pointer;
  }
`;

const StyledX = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xs};
  @media ${({ theme }) => theme.breakpoints.laptop} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
`;

const StyledButtonsContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledButton = styled.button`
  position: absolute;
  font-size: ${({ theme }) => theme.fontSize.xs};
  background-color: inherit;
  color: #fff;
  border: none;
  padding: 0.7rem;
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  @media ${({ theme }) => theme.breakpoints.laptop} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  :hover {
    opacity: 1;
  }
  :focus {
    outline: none;
  }
  :nth-child(1) {
    left: 2%;
  }
  :nth-child(2) {
    right: 2%;
  }
`;

const Galeries = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "galery" } }) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  const imagesLength = data.allFile.edges.length;

  const changeImage = (direction) => {
    if (direction === "next") {
      setIndexImg(indexImg + 1);
      if (indexImg >= imagesLength - 1) {
        setIndexImg(0);
      }
    } else if (direction === "prev") {
      setIndexImg(indexImg - 1);
      if (indexImg <= 0) {
        setIndexImg(imagesLength - 1);
      }
    }
  };

  const [showSliderContainer, setShowSliderContainer] = useState(false);
  const [indexImg, setIndexImg] = useState(0);

  const runSlider = (index) => {
    setShowSliderContainer(true);
    setIndexImg(index);
  };

  return (
    <MainTemplate>
      <Container>
        <StyledWrapperGallery>
          {data.allFile.edges.map((image, index) => {
            return (
              <StyledBackgroundImg
                fluid={image.node.childImageSharp.fluid}
                onClick={() => runSlider(index)}
                key={image.node.id}
              ></StyledBackgroundImg>
            );
          })}
        </StyledWrapperGallery>
        <SliderContainer showSliderContainer={showSliderContainer}>
          <StyledBackgroundImgSlider
            fluid={data.allFile.edges[indexImg].node.childImageSharp.fluid}
          />
          <StyledX onClick={() => setShowSliderContainer(false)}>
            <i className="fas fa-times"></i>
          </StyledX>
          <StyledButtonsContainer>
            <StyledButton
              onClick={() => {
                changeImage("prev");
              }}
            >
              <i className="fas fa-chevron-left"></i>
            </StyledButton>
            <StyledButton
              onClick={() => {
                changeImage("next");
              }}
            >
              <i className="fas fa-chevron-right"></i>
            </StyledButton>
          </StyledButtonsContainer>
        </SliderContainer>
      </Container>
    </MainTemplate>
  );
};

export default Galeries;
