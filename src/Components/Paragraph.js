import styled from "styled-components";

const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  line-height: 1.8;
  color: gray;
  margin: 0 5px;
  text-align: center;
`;
export default Paragraph;
