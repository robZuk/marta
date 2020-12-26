import React from "react";
import Navigation from "../Components/Navigation";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const StyledWrapper = styled.div`
  position: absolute;
  top: 10%;
  height: 90vh;
  width: 100vw;
`;

const MainTemplate = ({ children }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Marta Chojnowska</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Navigation />
      <StyledWrapper>{children}</StyledWrapper>
    </>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element,
};

export default MainTemplate;
