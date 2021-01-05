import React, { useState, useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplate";

const StyledSliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  letter-spacing: 3px;
`;

const StyledLeftSlide = styled.div`
  height: 100%;
  width: 35%;
  position: absolute;
  top: ${({ elLength }) => `-${(elLength - 1) * 100}vh`};
  left: 0;
  transform: ${({ elHeight, activeSlideIndex }) =>
    `translateY(${elHeight * activeSlideIndex}px)`};
  transition: transform 0.5s ease-in-out;

  @media ${({ theme }) => theme.orientation.portrait} {
    transform: ${({ elWidth, activeSlideIndex, elLength }) =>
      `translateX(${(elWidth / elLength) * activeSlideIndex}px)`};
    display: flex;
    top: 0;
    left: ${({ elLength }) => `-${(elLength - 1) * 100}vw`};
    height: 35%;
    width: ${({ elLength }) => `${elLength * 100}%`};
  }
  & > div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    @media ${({ theme }) => theme.orientation.portrait} {
      height: 100%;
      width: 100%;
    }
    :nth-child(1) {
      background-color: #ffb866;
    }
    :nth-child(2) {
      background-color: #8fa7e0;
    }
    :nth-child(3) {
      background-color: lightsalmon;
    }
    :nth-child(4) {
      background-color: #cec1b9;
    }

    & h1 {
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize.s};

      margin: -30px 40px 10px 40px;
      @media ${({ theme }) => theme.breakpoints.tablet} {
      }
      @media ${({ theme }) => theme.breakpoints.laptop} {
        font-size: ${({ theme }) => theme.fontSize.l};
      }
    }
    & p {
      text-align: center;
      margin: 0 30px;
      font-size: ${({ theme }) => theme.fontSize.xs};

      @media ${({ theme }) => theme.breakpoints.tablet} {
        font-size: ${({ theme }) => theme.fontSize.s};
      }
    }
  }
`;

const StyledRightSlide = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 35%;
  width: 65%;
  transform: ${({ elHeight, activeSlideIndex }) =>
    `translateY(-${elHeight * activeSlideIndex}px)`};
  transition: transform 0.5s ease-in-out;
  @media ${({ theme }) => theme.orientation.portrait} {
    transform: ${({ elWidth, activeSlideIndex, elLength }) =>
      `translateX(${-(elWidth / elLength) * activeSlideIndex}px)`};
    display: flex;
    top: 35%;
    left: 0;
    height: 65%;
    width: ${({ elLength }) => `${elLength * 100}%`};
  }
`;

const StyledActionsButtonLandscape = styled.div`
  position: absolute;
  left: 35%;
  top: 50%;
  z-index: 0;

  transform: translateX(-50%);
`;

const StyledActionsButtonPortrait = styled.div`
  position: absolute;
  left: 50%;
  top: 35%;
  z-index: 0;
  transform: translateX(-50%);
`;

const StyledButton = styled.button`
  background-color: #fff;
  border: none;
  color: #aaa;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  padding: 10px;
  @media ${({ theme }) => theme.breakpoints.laptopM} {
    font-size: ${({ theme }) => theme.fontSize.xs};
    padding: 14px;
  }
  @media ${({ theme }) => theme.breakpoints.laptopL} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  :hover {
    color: #222;
  }
  :focus {
    outline: none;
  }
`;

const StyledButtonDown = styled(StyledButton)`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  @media ${({ theme }) => theme.orientation.portrait} {
    display: none;
  }
`;

const StyledButtonUp = styled(StyledButton)`
  transform: translateY(-100%);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  @media ${({ theme }) => theme.orientation.portrait} {
    display: none;
  }
`;

const StyledButtonLeft = styled(StyledButton)`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;

  @media ${({ theme }) => theme.orientation.landscape} {
    display: none;
  }
`;

const StyledButtonRight = styled(StyledButton)`
  transform: translateY(-100%);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  @media ${({ theme }) => theme.orientation.landscape} {
    display: none;
  }
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;
`;

const Main = () => {
  const [elHeight, setElHeight] = useState(0);
  const [elWidth, setElWidth] = useState(0);
  const [elLength, setElLength] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const el = useRef();

  useEffect(() => {
    setElHeight(el.current.clientHeight);
  }, [elHeight]);

  useEffect(() => {
    setElLength(el.current.children.length);
  }, [elLength]);

  useEffect(() => {
    setElWidth(el.current.clientWidth);
  }, [elWidth]);

  const changeSlideLandscape = (direction) => {
    if (direction === "up") {
      setElHeight(el.current.clientHeight);
      setActiveSlideIndex(activeSlideIndex + 1);
      if (activeSlideIndex >= elLength - 1) {
        setActiveSlideIndex(0);
      }
    } else if (direction === "down") {
      setElHeight(el.current.clientHeight);
      setActiveSlideIndex(activeSlideIndex - 1);
      if (activeSlideIndex <= 0) {
        setActiveSlideIndex(elLength - 1);
      }
    }
  };

  const changeSlidePortrait = (direction) => {
    if (direction === "left") {
      setElWidth(el.current.clientWidth);
      setActiveSlideIndex(activeSlideIndex + 1);
      if (activeSlideIndex >= elLength - 1) {
        setActiveSlideIndex(0);
      }
    } else if (direction === "right") {
      setElWidth(el.current.clientWidth);
      setActiveSlideIndex(activeSlideIndex - 1);
      if (activeSlideIndex <= 0) {
        setActiveSlideIndex(elLength - 1);
      }
    }
  };

  const data = useStaticQuery(
    graphql`
      query {
        img1: file(relativePath: { eq: "img2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        img2: file(relativePath: { eq: "img3.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        img3: file(relativePath: { eq: "img7.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        img4: file(relativePath: { eq: "img6.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const img1 = data.img1.childImageSharp.fluid;
  const img2 = data.img2.childImageSharp.fluid;
  const img3 = data.img3.childImageSharp.fluid;
  const img4 = data.img4.childImageSharp.fluid;

  return (
    <MainTemplate>
      <StyledSliderContainer className="slider-container">
        <StyledLeftSlide
          ref={el}
          elHeight={elHeight}
          elWidth={elWidth}
          elLength={elLength}
          activeSlideIndex={activeSlideIndex}
        >
          <div>
            <h1>Nature flower</h1>
            <p>all in pink</p>
          </div>
          <div>
            <h1>Bluuue Sky</h1>
            <p>with it's mountains</p>
          </div>
          <div>
            <h1>Lonely castle</h1>
            <p>in the wilderness</p>
          </div>
          <div>
            <h1>Marta Chojnowska</h1>
            <p>Instruktor fitness</p>
          </div>
        </StyledLeftSlide>

        <StyledRightSlide
          ref={el}
          elHeight={elHeight}
          elWidth={elWidth}
          elLength={elLength}
          activeSlideIndex={activeSlideIndex}
        >
          <StyledBackgroundImage fluid={img1}></StyledBackgroundImage>
          <StyledBackgroundImage fluid={img2}></StyledBackgroundImage>
          <StyledBackgroundImage fluid={img3}></StyledBackgroundImage>
          <StyledBackgroundImage fluid={img4}></StyledBackgroundImage>
        </StyledRightSlide>

        <StyledActionsButtonLandscape>
          <StyledButtonDown
            onClick={() => {
              changeSlideLandscape("down");
            }}
          >
            <i className="fas fa-arrow-down"></i>
          </StyledButtonDown>
          <StyledButtonUp
            onClick={() => {
              changeSlideLandscape("up");
            }}
          >
            <i className="fas fa-arrow-up"></i>
          </StyledButtonUp>
        </StyledActionsButtonLandscape>
        <StyledActionsButtonPortrait>
          {" "}
          <StyledButtonLeft
            onClick={() => {
              changeSlidePortrait("left");
            }}
          >
            <i className="fas fa-arrow-left"></i>
          </StyledButtonLeft>
          <StyledButtonRight
            onClick={() => {
              changeSlidePortrait("right");
            }}
          >
            <i className="fas fa-arrow-right"></i>
          </StyledButtonRight>
        </StyledActionsButtonPortrait>
      </StyledSliderContainer>
    </MainTemplate>
  );
};

export default Main;
