import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledNav = styled.nav`
  position: fixed;
  height: 7vh;
  background-color: inherit;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const StyledUl = styled.ul`
  width: 100%;
  height: 100%;
  margin: 3% 5% 0 5%;
  display: grid;
  grid-template-columns: 15fr 1fr 1fr 1fr;
  column-gap: 20px;
  font-size: ${({ theme }) => theme.fontSize.s};

  @media ${({ theme }) => theme.breakpoints.laptop} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.white};
  text-decoration: none;
`;

const Navigation = () => {
  return (
    <StyledNav>
      <StyledContainer>
        <StyledUl>
          <StyledLink to="/">
            <i className="fas fa-home"></i>
          </StyledLink>
          <StyledLink to="/Contact/">
            <i className="fab fa-facebook"></i>
          </StyledLink>
          <StyledLink to="/Galeries/">
            <i className="fas fa-camera"></i>
          </StyledLink>

          <StyledLink to="/Contact/">
            <i className="far fa-envelope"></i>
          </StyledLink>
        </StyledUl>
      </StyledContainer>
    </StyledNav>
  );
};

export default Navigation;
