import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  background-color: white;
  border: 1px solid grey;
  border-radius: 3px;
  font-size: 1.5rem;
  color: black;
  padding: 1% 2%;
  text-decoration: none;
  transition: linear 0.2s;
  :hover {
    background-color: indianred;
    color: white;
  }
`;

export default Button;
