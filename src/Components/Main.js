import React, { useState, useEffect, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";
import MainTemplate from "../templates/MainTemplate";
import img6 from "../../static/images/img6.jpg";
import img2 from "../../static/images/img2.jpg";
import img3 from "../../static/images/img3.jpg";
import img7 from "../../static/images/img7.jpg";

const StyledSliderContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100%;
  letter-spacing: 3px;
`;

const StyledLeftSlide = styled.div`
  height: 100%;
  width: 35%;
  position: absolute;
  top: ${({ elLength }) => `-${(elLength - 1) * 90}vh`};
  left: 0;
  transform: ${({ elHeight, activeSlideIndex }) =>
    `translateY(${elHeight * activeSlideIndex}px)`};
  transition: transform 0.5s ease-in-out;

  & > div {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
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
  }
  & h1 {
    font-size: 40px;
    margin-bottom: 10px;
    margin-top: -30px;
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

  & > div {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 100%;
    width: 100%;
    :nth-child(1) {
      background-image: url(${img2});
      /* background-color: gray;
        background-blend-mode: soft-light; */
    }
    :nth-child(2) {
      background-image: url(${img6});
    }
    :nth-child(3) {
      background-image: url(${img7});
    }
    :nth-child(4) {
      background-image: url(${img3});
    }
  }
`;

const StyledActionsButton = styled.div`
  position: absolute;
  left: 35%;
  top: 50%;
  z-index: 100;
  transform: translateX(-50%);
`;

const StyledButton = styled.button`
  background-color: #fff;
  border: none;
  color: #aaa;
  cursor: pointer;
  font-size: 16px;
  padding: 15px;
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
`;

const StyledButtonUp = styled(StyledButton)`
  transform: translateY(-100%);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const Main = () => {
  const [elHeight, setElHeight] = useState(0);
  const [elLength, setElLength] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const el = useRef();

  useEffect(() => {
    setElHeight(el.current.clientHeight);
  }, [elHeight]);

  useEffect(() => {
    setElLength(el.current.children.length);
  }, [elLength]);

  const changeSlide = (direction) => {
    if (direction === "up") {
      setActiveSlideIndex(activeSlideIndex + 1);
      if (activeSlideIndex >= elLength - 1) {
        setActiveSlideIndex(0);
      }
    } else if (direction === "down") {
      setActiveSlideIndex(activeSlideIndex - 1);
      if (activeSlideIndex <= 0) {
        setActiveSlideIndex(elLength - 1);
      }
    }
  };

  return (
    <MainTemplate>
      <StyledSliderContainer className="slider-container">
        <StyledLeftSlide
          ref={el}
          elHeight={elHeight}
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
          activeSlideIndex={activeSlideIndex}
        >
          <div />
          <div />
          <div />
          <div />
        </StyledRightSlide>

        <StyledActionsButton>
          <StyledButtonDown
            onClick={() => {
              changeSlide("down");
            }}
          >
            <i className="fas fa-arrow-down"></i>
          </StyledButtonDown>
          <StyledButtonUp
            onClick={() => {
              changeSlide("up");
            }}
          >
            <i className="fas fa-arrow-up"></i>
          </StyledButtonUp>
        </StyledActionsButton>
      </StyledSliderContainer>
    </MainTemplate>
  );
};

export default Main;
