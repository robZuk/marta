import React from "react";
import MainTemplate from "../templates/MainTemplate";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Paragraph from "../Components/Paragraph";
import marta from "../../static/images/marta.jpeg";
import { Link } from "gatsby";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #222;
`;
const StyledInnerContainer = styled.div`
  width: 80%;
  height: 100%;
  display: grid;
  margin: 0 10%;
  grid-template-columns: 1fr 3fr;
  background-color: white;
  box-shadow: inset 0 0 20px gray;
`;

const StyledLeftSide = styled.div`
  background-image: url(${marta});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: left center;
  width: 100%;
  height: 100%;
`;
const StyledRightSide = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  align-items: center;
  justify-items: start;
  padding-right: 5%;
  box-shadow: -10px 10px -10px gray;
`;

const AboutMe = () => {
  return (
    <MainTemplate>
      <StyledContainer>
        <StyledInnerContainer>
          <StyledLeftSide />
          <StyledRightSide>
            <Header>o mnie</Header>
            <Paragraph>
              Lorem ipsum dolor sit amet, in usu hinc albucius corrumpit, duo
              feugiat accusamus in. Sed ne impetus aperiri definitionem, quo
              noster nostro sensibus ne. Convenire tincidunt his te, cum ex
              iracundia cotidieque. Vel ei integre saperet sensibus, sit ne
              dolore reprimique. Alii virtute vis ad. Consul tacimates no vel.
              Molestie fabellas tractatos est cu, ei minim intellegam quaerendum
              ius. At honestatis temporibus his, te tale aliquam vel. Id tollit
              postea usu. Cu est invidunt consequuntur. Alii oratio audire eum
              eu, ei pri nonumes copiosae imperdiet. No choro invenire splendide
              has, sit ne inimicus maiestatis. Vix ut corpora electram, id
              putant inimicus usu. Autem praesent voluptatum sit ut, at vix
              consul fuisset petentium. Sea eu habeo propriae, viris laoreet
              accusata vel ne. Ea per dicam utamur, eos modo volutpat cu. Sea et
              cibo quas partem, mea ad doctus rationibus. At brute sanctus his,
              latine aliquam ea per. Sit no elit euismod, et eripuit scriptorem
              eam. Eirmod hendrerit ei est, justo movet mandamus ut vix. Nostro
              discere prodesset cu quo. Nulla blandit has in, ea dicam munere
              tibique ius. Ex sale delicatissimi est. Id vel dolor legimus
              oportere, dico aeterno philosophia cu vix. Duis dicunt at usu, mea
              modo fugit ut.
            </Paragraph>
            <Button as={Link} to="/">
              <i className="fas fa-backward"></i> Powrót
            </Button>
          </StyledRightSide>
        </StyledInnerContainer>
      </StyledContainer>
    </MainTemplate>
  );
};

export default AboutMe;
