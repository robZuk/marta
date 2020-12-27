import React, { useState, useEffect, useRef } from "react";
import MainTemplate from "../templates/MainTemplate";
import Title from "../Components/Title";
import styled from "styled-components";
import img1 from "../../static/galery/img1.jpeg";
import img2 from "../../static/galery/img2.jpeg";
import img3 from "../../static/galery/img3.jpeg";
import img4 from "../../static/galery/img4.jpeg";
import img5 from "../../static/galery/img5.jpeg";
import img6 from "../../static/galery/img6.jpeg";
import img7 from "../../static/galery/img7.jpeg";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 6fr;
  justify-content: center;
  align-items: start;
`;

const StyledTitle = styled(Title)`
  text-align: center;
  margin-top: 5%;
  font-size: 4rem;
`;

const StyledCarousel = styled.div`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  height: 840px;
  width: 800px;
  overflow: hidden;
`;

const StyledImageContainer = styled.div`
  display: flex;
  transform: translateX(0);
  transition: transform 0.5s ease-in-out;
`;

const StyledImg = styled.img`
  display: block;
  height: 100%;
  min-width: 100%;
  height: 800px;
  object-fit: contain;
  transform: ${({ elWidth, activeSlideIndex }) =>
    `translateX(-${elWidth * activeSlideIndex}px)`};
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  height: 40px;
  font-size: 1.6rem;
  background-color: indianred;
  color: #fff;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  width: 49.5%;
  :hover {
    opacity: 0.9;
  }
  :focus {
    outline: none;
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
      setActiveSlideIndex(activeSlideIndex + 1);
      if (activeSlideIndex >= elLength - 1) {
        setActiveSlideIndex(0);
      }
    } else if (direction === "prev") {
      setActiveSlideIndex(activeSlideIndex - 1);
      if (activeSlideIndex <= 0) {
        setActiveSlideIndex(elLength - 1);
      }
    }
  };

  return (
    <MainTemplate>
      <StyledContainer>
        <StyledTitle>galeria</StyledTitle>
        <StyledCarousel>
          <StyledImageContainer ref={el}>
            <StyledImg
              elWidth={elWidth}
              activeSlideIndex={activeSlideIndex}
              src={img1}
              alt="first"
            />
            <StyledImg
              elWidth={elWidth}
              activeSlideIndex={activeSlideIndex}
              src={img2}
              alt="second"
            />
            <StyledImg
              elWidth={elWidth}
              activeSlideIndex={activeSlideIndex}
              src={img3}
              alt="third"
            />
            <StyledImg
              elWidth={elWidth}
              activeSlideIndex={activeSlideIndex}
              src={img4}
              alt="fourth"
            />
            <StyledImg
              elWidth={elWidth}
              activeSlideIndex={activeSlideIndex}
              src={img5}
              alt="fifth"
            />
            <StyledImg
              elWidth={elWidth}
              activeSlideIndex={activeSlideIndex}
              src={img6}
              alt="six"
            />
            <StyledImg
              elWidth={elWidth}
              activeSlideIndex={activeSlideIndex}
              src={img7}
              alt="seven"
            />
          </StyledImageContainer>
          <StyledButtonsContainer>
            <StyledButton
              onClick={() => {
                changeImage("prev");
              }}
            >
              Prev
            </StyledButton>
            <StyledButton
              onClick={() => {
                changeImage("next");
              }}
            >
              Next
            </StyledButton>
          </StyledButtonsContainer>
        </StyledCarousel>
      </StyledContainer>
    </MainTemplate>
  );
};

export default Galeries;
