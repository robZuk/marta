import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 20px;
  padding-top: 3px;
  bottom: 0%;
  display: flex;
  justify-content: center;
  color: ${({ theme }) => theme.white};
  background-color: rgba(0, 0, 0, 0.5);
  font-size: ${({ theme }) => theme.fontSize.xxs};
  & p {
    font-family: "Open Sans", sans-serif;
    display: inline;
  }
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <i className="far fa-copyright">
        <p> {currentYear} ROBERT ŻUK. ALL RIGHTS RESERVED.</p>
      </i>
    </Container>
  );
};

export default Footer;
