import React, { useState, useEffect, useRef } from "react";
import MainTemplate from "../templates/MainTemplate";
import styled from "styled-components";
import Img from "gatsby-image";
import { Link, graphql, useStaticQuery } from "gatsby";

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 6fr;
  justify-content: center;
  align-items: start;
  background-color: ${({ theme }) => theme.grey700};
  overflow: hidden;
`;

const StyledCarousel = styled.div`
  margin-top: 15%;
  position: relative;
  overflow: hidden;
  @media ${({ theme }) => theme.orientation.portarait} {
    height: 80vh;
    width: 100vw;
  }
  @media ${({ theme }) => theme.orientation.landscape} {
    height: 85vh;
    width: 80vh;
  }
`;

const StyledImageContainer = styled.div`
  display: flex;
  transform: translateX(0);
`;

const StyledImg = styled(Img)`
  display: block;
  width: 100%;
  min-width: 100%;
  margin: auto;
  height: 85vh;
  object-fit: contain;
  transition: transform 0.5s ease-in-out;
  transform: ${({ elWidth, activeSlideIndex }) =>
    `translateX(-${elWidth * activeSlideIndex}px)`};
`;

const StyledButtonsContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  display: flex;
  justify-content: space-between;
  transform: translate(-50%, -50%);
`;

const StyledButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.xs};
  background-color: rgba(0, 0, 0, 0.3);
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
    margin-left: 0;
    width: auto;
  }
  :nth-child(2) {
    margin-right: 0;
    width: auto;
  }
`;

const Galeries = () => {
  const [elWidth, setElWidth] = useState(0);
  const [elLength, setElLength] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const el = useRef();

  useEffect(() => {
    setElWidth(el.current.clientWidth);
  }, [elWidth]);

  useEffect(() => {
    setElLength(el.current.children.length);
  }, [elLength]);

  const changeImage = (direction) => {
    if (direction === "next") {
      setElWidth(el.current.clientWidth);
      setActiveSlideIndex(activeSlideIndex + 1);
      if (activeSlideIndex >= elLength - 1) {
        setActiveSlideIndex(0);
      }
    } else if (direction === "prev") {
      setElWidth(el.current.clientWidth);
      setActiveSlideIndex(activeSlideIndex - 1);
      if (activeSlideIndex <= 0) {
        setActiveSlideIndex(elLength - 1);
      }
    }
  };

  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "galery/img5.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 562, quality: 90) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      img2: file(relativePath: { eq: "galery/img2.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 936, quality: 90) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      img3: file(relativePath: { eq: "galery/img3.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 936, quality: 90) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      img4: file(relativePath: { eq: "galery/img4.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 936, quality: 90) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `);
  const img1 = data.img1.childImageSharp.fluid;
  const img2 = data.img2.childImageSharp.fluid;
  const img3 = data.img3.childImageSharp.fluid;
  const img4 = data.img4.childImageSharp.fluid;

  return (
    <MainTemplate>
      <StyledContainer>
        <StyledCarousel>
          <StyledImageContainer ref={el}>
            <StyledImg
              elWidth={elWidth}
              activeSlideIndex={activeSlideIndex}
              fluid={img1}
              alt="first"
            />
            <StyledImg
              elWidth={elWidth}
              activeSlideIndex={activeSlideIndex}
              fluid={img2}
              alt="second"
            />
            <StyledImg
              elWidth={elWidth}
              activeSlideIndex={activeSlideIndex}
              fluid={img3}
              alt="third"
            />
            <StyledImg
              elWidth={elWidth}
              activeSlideIndex={activeSlideIndex}
              fluid={img4}
              alt="fourth"
            />
          </StyledImageContainer>
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
        </StyledCarousel>
      </StyledContainer>
    </MainTemplate>
  );
};

export default Galeries;
