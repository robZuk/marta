import React from "react";
import MainTemplate from "../templates/MainTemplate";
import Button from "../Components/Button";
import { Link } from "gatsby";

const Activities = () => {
  return (
    <MainTemplate>
      <>
        <h1>Zajęcia</h1>
        <Button as={Link} to="/">
          Powrót
        </Button>
      </>
    </MainTemplate>
  );
};

export default Activities;
