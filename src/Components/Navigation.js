import React, { useState, useEffect, useRef } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  height: 8vh;
  width: 100vw;
  top: 0;

  z-index: 1;
  background-color: ${({ showNavbar }) =>
    `${showNavbar ? `rgba(0,0,0,0.8)` : `inherit`}`};
  transition: linear 0.3s;
  @media ${({ theme }) => theme.orientation.landscape} {
    height: 12vh;
  }
  @media ${({ theme }) => theme.breakpoints.laptopL} {
    height: 10vh;
  }
  @media ${({ theme }) => theme.breakpoints.laptopM} {
    width: 80vw;
    left: 10vw;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 10fr;
  @media ${({ theme }) => theme.orientation.landscape} {
    grid-template-columns: 1fr 20fr;
  }
`;

const StyledUl = styled.ul`
  width: 30%;
  height: 50%;
  margin: 2% 0% 0 0%;
  display: grid;
  justify-self: end;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: ${({ theme }) => theme.fontSize.xs};
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media ${({ theme }) => theme.breakpoints.laptop} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media ${({ theme }) => theme.orientation.landscape} {
    width: 30%;
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  text-shadow: 0px 2px 0 rgba(0, 0, 0, 0.5);
  transform: scale(1);
  transition: 0.5s;
  :hover {
    transform: scale(1) translateY(-15px);
  }
`;
const StyledA = styled.a`
  color: ${({ theme }) => theme.white};
  text-decoration: none;
  text-shadow: 0px 2px 0 rgba(0, 0, 0, 0.5);
  transform: scale(1);
  transition: 0.5s;
  :hover {
    transform: scale(1) translateY(-15px);
  }
`;

const StyledLinkLogo = styled(Link)`
  width: 4vw;
  height: 4vw;
  transform: translate(25%, 25%);
  color: ${({ theme }) => theme.white};
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 90%;
  border: 1px solid white;
  position: relative;
  & i {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media ${({ theme }) => theme.orientation.portrait} {
    width: 5vh;
    height: 5vh;
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.s};
  }
  @media ${({ theme }) => theme.breakpoints.laptopL} {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 2.5vw;
    height: 2.5vw;
    transform: translate(50%, 50%);
  }
`;

const Navigation = () => {
  const [elHeight, setElHeight] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);
  const el = useRef();

  useEffect(() => {
    setElHeight(el.current.clientHeight);
  }, [elHeight]);

  const fixNav = () => {
    if (window.scrollY > elHeight / 2) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", fixNav);
    return () => window.removeEventListener("scroll", fixNav);
  });

  return (
    <StyledNav ref={el} showNavbar={showNavbar}>
      <StyledContainer>
        <StyledLinkLogo to="/">
          <i className="fas fa-home"></i>
        </StyledLinkLogo>
        <StyledUl>
          <StyledA
            href="https://www.facebook.com/profile.php?id=100018858492608"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook" title="Facebook"></i>
          </StyledA>

          <StyledLink to="/Galeries/">
            <i className="fas fa-camera" title="Galeria"></i>
          </StyledLink>

          <StyledLink to="/Contact/">
            <i className="far fa-envelope" title="Kontact"></i>
          </StyledLink>
        </StyledUl>
      </StyledContainer>
    </StyledNav>
  );
};

export default Navigation;
