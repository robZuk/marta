import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const StyledHamburger = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 60px;
  height: 60px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${({ theme }) => theme.breakpoints.laptopM} {
    width: 85px;
    height: 85px;
  }

  & > div {
    position: relative;
    flex: none;
    width: 100%;
    height: 2px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;

    @media ${({ theme }) => theme.breakpoints.tab} {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
    @media ${({ theme }) => theme.breakpoints.laptopM} {
      height: 3px;
    }

    &:after,
    &:before {
      content: "";
      position: absolute;
      z-index: 1;
      top: -10px;
      width: 100%;
      height: 2px;
      background: inherit;
      @media ${({ theme }) => theme.breakpoints.laptopM} {
        top: -19px;
        height: 3px;
      }
    }

    &:after {
      top: 10px;
      @media ${({ theme }) => theme.breakpoints.laptopM} {
        top: 19px;
      }
    }
  }
`;

const StyledLink = styled(Link)`
  list-style: none;
  color: #fff;
  font-size: 1.5rem;
  padding: 1rem;
  text-decoration: none;
  transition: color 0.4s ease;
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  :hover {
    color: lightsalmon;
  }
`;

const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    background: rgba(24, 39, 51, 0.85);
    border-radius: 50%;
    width: 200vw;
    height: 200vw;
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    transform: scale(0);
    transition: all 0.4s ease;
    & > div {
      text-align: center;
      max-width: 90vw;
      max-height: 100vh;
      opacity: 0;
      transition: opacity 0.4s ease;

      & > ul {
        display: flex;
        flex-direction: column;
      }
    }
  }
`;

const StyledInputToggler = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  cursor: pointer;
  width: 50px;
  height: 50px;
  opacity: 0;
  @media ${({ theme }) => theme.breakpoints.laptopM} {
    width: 70px;
    height: 70px;
  }
  :h &:checked + ${StyledHamburger} > div {
    transform: rotate(135deg);
  }
  &:checked + ${StyledHamburger} > div:before,
  &:checked + ${StyledHamburger} > div:after {
    top: 0;
    transform: rotate(90deg);
  }
  &:checked:hover + ${StyledHamburger} > div {
    transform: rotate(225deg);
  }

  &:checked ~ ${StyledMenu} {
    visibility: visible;
  }
  &:checked ~ ${StyledMenu} > div {
    transform: scale(1);
    transition-duration: 0.75s;
  }
  &:checked ~ ${StyledMenu} > div > div {
    opacity: 1;
    transition: opacity 0.4s ease 0.4s;
  }
`;

const HamburgerMenu = () => {
  return (
    <StyledContainer>
      <StyledInputToggler type="checkbox"></StyledInputToggler>
      <StyledHamburger className="hamburger">
        <div></div>
      </StyledHamburger>
      <StyledMenu>
        <div>
          <div>
            <ul>
              {/* <StyledLink to="/">start</StyledLink> */}
              <StyledLink to="/AboutMe/">o mnie</StyledLink>
              <StyledLink to="/Activities/">zajęcia</StyledLink>
              <StyledLink to="/Offer/">oferta</StyledLink>
              <StyledLink to="/Galeries/">galeria</StyledLink>
              <StyledLink to="/Contact/">kontakt</StyledLink>
            </ul>
          </div>
        </div>
      </StyledMenu>
    </StyledContainer>
  );
};

export default HamburgerMenu;
