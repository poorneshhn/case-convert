import styled from "styled-components";
import Capitalize from "./capitalize/Capitalize";
import LowerCase from "./lowercase/LowerCase";
import CrazyCase from "./crazycase/CrazyCase";

const ContainerDiv = styled.div`
  width: 100%;
  background-color: orange;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDiv = styled.div`
  width: 60%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  gap: 10px;

  @media (max-width: 870px) {
    width: 80%;
    gap: 5px;
  }

  @media (max-width: 640px) {
    flex-direction: column;
    align-items: start;
    gap: 10px;
  }
`;

function ButtonsComponent({ textValue, func, buttonSetFunc }) {
  return (
    <ContainerDiv>
      <StyledDiv>
        <Capitalize
          textValue={textValue}
          func={func}
          buttonSetFunc={buttonSetFunc}
        />
        <LowerCase
          textValue={textValue}
          func={func}
          buttonSetFunc={buttonSetFunc}
        />
        <CrazyCase
          textValue={textValue}
          func={func}
          buttonSetFunc={buttonSetFunc}
        />
      </StyledDiv>
    </ContainerDiv>
  );
}

export default ButtonsComponent;
