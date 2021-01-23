import React, { useState, useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplate";
import dataSlides from "../data/slides.json";

const StyledSliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  letter-spacing: 3px;
  @media ${({ theme }) => theme.breakpoints.laptopM} {
    width: 80%;
    margin: 0 auto;
  }
`;

const StyledLeftSlide = styled.div`
  height: 100%;
  width: 40%;
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
    height: 40%;
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
      background-color: #b0c4de;
    }
    :nth-child(2) {
      background-color: #483d8b;
    }
    :nth-child(3) {
      background-color: #cd5c5c;
    }
    :nth-child(4) {
      background-color: #5690b7;
    }
    :nth-child(5) {
      background-color: #d6ae7b;
    }

    & h3 {
      text-align: center;
      font-size: ${({ theme }) => theme.fontSize.xs};
      margin: 0% 4% 2% 4%;
      text-shadow: 0px 2px 0 rgba(0, 0, 0, 0.5);
      @media ${({ theme }) => theme.breakpoints.tablet} {
        font-size: ${({ theme }) => theme.fontSize.s};
      }
      @media ${({ theme }) => theme.breakpoints.laptop} {
        font-size: ${({ theme }) => theme.fontSize.l};
      }
    }
    & p {
      text-align: center;
      margin: 0 10%;
      font-size: ${({ theme }) => theme.fontSize.xxs};
      @media ${({ theme }) => theme.breakpoints.laptop} {
        font-size: ${({ theme }) => theme.fontSize.xs};
      }
      @media ${({ theme }) => theme.breakpoints.laptopL} {
        font-size: ${({ theme }) => theme.fontSize.s};
      }
      @media ${({ theme }) => theme.orientation.portrait} {
      }
    }
  }
`;

const StyledRightSlide = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 40%;
  width: 60%;
  transform: ${({ elHeight, activeSlideIndex }) =>
    `translateY(-${elHeight * activeSlideIndex}px)`};
  transition: transform 0.5s ease-in-out;
  @media ${({ theme }) => theme.orientation.portrait} {
    transform: ${({ elWidth, activeSlideIndex, elLength }) =>
      `translateX(${-(elWidth / elLength) * activeSlideIndex}px)`};
    display: flex;
    top: 40%;
    left: 0;
    height: 60%;
    width: ${({ elLength }) => `${elLength * 100}%`};
  }
`;

const StyledActionsButtonLandscape = styled.div`
  position: absolute;
  left: 40%;
  top: 50%;
  z-index: 0;
  transform: translateX(-50%);
`;

const StyledActionsButtonPortrait = styled.div`
  position: absolute;
  left: 50%;
  top: 40%;
  z-index: 0;
  transform: translateX(-50%);
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.white};
  border: none;
  color: ${({ theme }) => theme.grey300};
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
    color: ${({ theme }) => theme.black};
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

const StyledBackgroundImg = styled(BackgroundImage)`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 100%;
  width: 100%;

  :nth-child(1) {
    filter: brightness(100%) contrast(100%) grayscale(0%) sepia(20%);
  }
  :nth-child(4) {
    background-position: center top;
  }
`;

const Main = () => {
  const [elHeight, setElHeight] = useState(0);
  const [elWidth, setElWidth] = useState(0);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const el = useRef();

  useEffect(() => {
    setElHeight(el.current.clientHeight);
  }, [elHeight]);

  useEffect(() => {
    setElWidth(el.current.clientWidth);
  }, [elWidth]);

  const changeSlideLandscape = (direction) => {
    if (direction === "up") {
      setElHeight(el.current.clientHeight);
      setActiveSlideIndex(activeSlideIndex + 1);
      if (activeSlideIndex >= imagesLength - 1) {
        setActiveSlideIndex(0);
      }
    } else if (direction === "down") {
      setElHeight(el.current.clientHeight);
      setActiveSlideIndex(activeSlideIndex - 1);
      if (activeSlideIndex <= 0) {
        setActiveSlideIndex(imagesLength - 1);
      }
    }
  };

  const changeSlidePortrait = (direction) => {
    if (direction === "left") {
      setElWidth(el.current.clientWidth);
      setActiveSlideIndex(activeSlideIndex + 1);
      if (activeSlideIndex >= imagesLength - 1) {
        setActiveSlideIndex(0);
      }
    } else if (direction === "right") {
      setElWidth(el.current.clientWidth);
      setActiveSlideIndex(activeSlideIndex - 1);
      if (activeSlideIndex <= 0) {
        setActiveSlideIndex(imagesLength - 1);
      }
    }
  };

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "main" } }) {
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

  return (
    <MainTemplate>
      <StyledSliderContainer className="slider-container">
        <StyledLeftSlide
          ref={el}
          elHeight={elHeight}
          elWidth={elWidth}
          elLength={imagesLength}
          activeSlideIndex={activeSlideIndex}
        >
          {dataSlides.slides.map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </StyledLeftSlide>

        <StyledRightSlide
          ref={el}
          elHeight={elHeight}
          elWidth={elWidth}
          elLength={imagesLength}
          activeSlideIndex={activeSlideIndex}
        >
          {data.allFile.edges.map((image) => {
            return (
              <StyledBackgroundImg
                fluid={image.node.childImageSharp.fluid}
                key={image.node.id}
              ></StyledBackgroundImg>
            );
          })}
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
