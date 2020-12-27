import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledNav = styled.nav`
  height: 10vh;
  background-color: ${({ theme }) => theme.grey800};
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  /* padding: 20px 0; */
  transition: all 0.3s ease-in-out;
`;

const StyledUl = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: space-around;
  letter-spacing: 3px;
  font-size: 1.2rem;
`;

const StyledLink = styled(Link)`
  width: 19%;
  justify-content: space-around;
  /* margin: 0 1px; */
  text-align: center;
  color: #c0c0c0;
  /* font-weight: bold; */
  /* color: ${({ current }) => (current ? "#c0392b" : "#fff")};
    font-weight: ${({ current }) => (current ? "bold" : "normal")}; */
  text-decoration: none;
  /* padding: 7px 15px; */
  transition: all 0.3s ease-in-out;
  :hover {
    color: indianred;
  }
`;

const StyledLinkMain = styled(StyledLink)`
  width: 30%;
  font-size: 2rem;
  letter-spacing: 5px;
  font-weight: bold;
`;

const Navigation = () => {
  return (
    <StyledNav>
      <StyledContainer>
        <StyledLinkMain to="/">Marta Chojnowska</StyledLinkMain>

        <StyledUl>
          <StyledLink to="/AboutMe/">o mnie</StyledLink>

          <StyledLink to="/Activities/">zajęcia</StyledLink>

          <StyledLink to="/Offer/">oferta</StyledLink>

          <StyledLink to="/Galeries/">galeria</StyledLink>

          <StyledLink to="/Contact/">kontakt</StyledLink>
        </StyledUl>
      </StyledContainer>
    </StyledNav>
  );
};

export default Navigation;
