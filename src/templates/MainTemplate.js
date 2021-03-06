import React from "react";
import Navigation from "../Components/Navigation";
import styled from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { Helmet } from "react-helmet";
import { theme } from "../theme/mainTheme";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

const StyledWrapper = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
`;

const MainTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Marta Chojnowska - instruktor fitness. Prowadzi zajęcia z salsation, pilates, joga na hamakach oraz ćwiczenia wzmacnijące na terenie Rumi, Wejherowa i Redy "
        />
        <meta
          name="keywords"
          content="fitness, pilates, joga, zajęcia wzmacniające Reda, Rumia , Wejherowo, "
        />
        <meta name="author" content="Marta Chojnowska" />
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
    </ThemeProvider>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.element,
};

export default MainTemplate;
