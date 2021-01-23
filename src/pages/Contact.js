import React from "react";
import MainTemplate from "../templates/MainTemplate";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import Footer from "../Components/Footer";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledBackgroundImage = styled(BackgroundImage)`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: left center;
  filter: grayscale(10%) sepia(0%) brightness(70%);
  height: 100%;
  width: 100%;
  @media ${({ theme }) => theme.orientation.portrait} {
    background-position: right center;
  }
`;

const StyledFormContainer = styled.div`
  position: absolute;
  background-color: inherit;
  backdrop-filter: brightness(70%);
  border-radius: 5px;
  @media ${({ theme }) => theme.orientation.portrait} {
    top: 8%;
    width: 95vw;
    height: 45%;
    margin: auto;
  }
  @media ${({ theme }) => theme.orientation.landscape} {
    top: 15%;
    left: 5%;
    width: 40vw;
    height: 70%;
  }
`;

const StyledContact = styled.div`
  position: absolute;
  background-color: inherit;
  backdrop-filter: brightness(70%);
  border-radius: 5px;
  color: ${({ theme }) => theme.white};
  padding: 2% 4%;
  @media ${({ theme }) => theme.orientation.portrait} {
    padding: 2% 10%;
  }
  & h3 {
    &:nth-of-type(2) {
      margin-top: 10%;
    }
    @media ${({ theme }) => theme.breakpoints.tablet} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
    @media ${({ theme }) => theme.breakpoints.laptopM} {
      font-size: ${({ theme }) => theme.fontSize.m};
    }
  }
  & ul {
    list-style-position: inside;
    list-style-type: circle;
  }
  & p,
  li {
    margin-top: 3%;
    font-size: ${({ theme }) => theme.fontSize.xxs};
    @media ${({ theme }) => theme.breakpoints.tablet} {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
    @media ${({ theme }) => theme.breakpoints.laptopM} {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
  @media ${({ theme }) => theme.orientation.portrait} {
    top: 55%;
    width: 95vw;
    height: 40%;
  }
  @media ${({ theme }) => theme.orientation.landscape} {
    top: 15%;
    right: 5%;
    width: 40vw;
    height: 70%;
  }
`;

const StyledHeader = styled.div`
  border-bottom: 1px solid #f0f0f0;
  background-color: inherit;
  color: ${({ theme }) => theme.white};
  text-align: center;
  padding: 3%;
  font-size: ${({ theme }) => theme.fontSize.xs};
  @media ${({ theme }) => theme.breakpoints.tablet} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
  @media ${({ theme }) => theme.orientation.landscape} {
    padding: 2%;
  }
`;

const StyledForm = styled.form`
  width: 100%;
  height: 80%;
  padding: 2% 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & input {
    background-color: white;
    padding: 3%;
    opacity: 0.9;
    margin: 2% 0;
    font-size: ${({ theme }) => theme.fontSize.xxs};
    border: 1px solid ${({ theme }) => theme.grey300};
    border-radius: 3px;
    ::placeholder {
      letter-spacing: 1px;
    }
    /* @media ${({ theme }) => theme.breakpoints.tablet} {
      font-size: ${({ theme }) => theme.fontSize.xs};
    } */
    @media ${({ theme }) => theme.breakpoints.laptop} {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
    @media ${({ theme }) => theme.orientation.landscape} {
      padding: 2%;
    }
  }
  & textarea {
    outline: none;
    padding: 3%;
    margin: 2% 0;
    opacity: 0.9;
    font-family: "Open Sans", sans-serif;
    font-size: ${({ theme }) => theme.fontSize.xxs};
    border: 1px solid ${({ theme }) => theme.grey300};
    border-radius: 3px;
    @media ${({ theme }) => theme.breakpoints.laptop} {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
    @media ${({ theme }) => theme.orientation.landscape} {
      padding: 2%;
    }
  }
  ::placeholder {
    letter-spacing: 1px;
  }

  & button {
    width: 10vh;
    padding: 3%;
    margin: 2% 0;
    outline: none;
    border: 2px solid ${({ theme }) => theme.grey400};
    letter-spacing: 1px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 3px;
    text-decoration: none;
    transition: linear 0.2s;
    color: ${({ theme }) => theme.white};
    background-color: rgba(0, 0, 0, 0.7);
    @media ${({ theme }) => theme.breakpoints.laptop} {
      font-size: ${({ theme }) => theme.fontSize.xs};
    }
    @media ${({ theme }) => theme.orientation.landscape} {
      width: 20vh;
      padding: 2%;
    }
    :hover {
      color: white;
      background-color: ${({ theme }) => theme.black};
    }
  }
`;

const Contact = () => {
  const data = useStaticQuery(
    graphql`
      query {
        img1: file(relativePath: { eq: "contact/img5.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  const img1 = data.img1.childImageSharp.fluid;

  return (
    <MainTemplate>
      <StyledContainer>
        <StyledBackgroundImage fluid={img1}></StyledBackgroundImage>
        <StyledFormContainer>
          <StyledHeader>Napisz do mnie ...</StyledHeader>
          <StyledForm name="contact" method="post" autoComplete="on">
            <input type="hidden" name="form-name" value="contact" required />
            <input
              type="text"
              name="name"
              id="name"
              maxLength="40"
              required
              placeholder="Twoje imię"
            />
            <input
              type="email"
              pattern="^\S+@\S+$"
              placeholder="Twój email"
              name="email"
              id="email"
              maxLength="40"
              required
            />
            <textarea
              name="message"
              id="message"
              placeholder="Twoja wiadomość"
              rows="12"
              required
            ></textarea>
            <button type="submit">Wyślij</button>
          </StyledForm>
        </StyledFormContainer>
        <StyledContact>
          <h3>Marta Chojnowska</h3>
          <p>Email: marta.chojnowska@hotmail.com</p>
          <h3>Zapraszam na zajęcia w :</h3>
          <ul>
            <li>Aqua Fit & Squash w Redzie,</li>
            <li>Studio Jogi i Pilatesu w Wejherowie,</li>
            <li>Twoja Joga w Rumi,</li>
            <li>Premium Fitness & Gym w Rumi,</li>
            <li>Olimp w Wejherowie.</li>
          </ul>
        </StyledContact>
        <Footer />
      </StyledContainer>
    </MainTemplate>
  );
};

export default Contact;
