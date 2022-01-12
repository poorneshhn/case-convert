import styled from "styled-components";

const Pop = styled.div`
  user-select: none;
  position: absolute;
  top: 20px;
  background-color: green;
  color: white;
  margin: auto;
  font-size: 2rem;
  padding: 5px 20px;
  border-radius: 10px;
  left: 40%;
`;

function Popup({ buttonClick }) {
  return buttonClick ? <Pop>Success</Pop> : null;
}

export default Popup;
