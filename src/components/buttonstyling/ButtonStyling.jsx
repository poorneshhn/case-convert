import styled from "styled-components";

const CustomButton = styled.button`
  padding: 0.75rem;
  width: 10rem;
  border-radius: 5px;
  color: snow;
  background-color: darkblue;
  font-size: 1rem;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover {
    background-color: darkred;
  }

  &:active {
    font-size: 0.9rem;
    background-color: black;
  }
`;

export default CustomButton;
