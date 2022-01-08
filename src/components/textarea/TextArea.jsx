import styled from "styled-components";
// import { useState, useEffect } from "react";

const DivText = styled.div`
  width: 900px;
  margin: 20px auto 15px auto;
  height: 80vh;

  @media (max-width: 960px) {
    width: 80%;
  }

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 576px) {
    width: 90%;
  }
`;

const Textarea = styled.textarea`
  resize: none;
  width: 100%;
  height: 100%;
  outline: 2px solid blue;
  background-color: lightblue;
  color: rgb(200, 100, 100);
  font-size: 2rem;
  padding: 10px;
  line-height: 1.5;

  &:focus {
    outline: 3px solid #c86464;
  }
`;

function TextArea({ func, textValue }) {
  return (
    <DivText>
      <Textarea
        placeholder="Type here..."
        onChange={(e) => func(e.target.value)}
        value={textValue}
      ></Textarea>
    </DivText>
  );
}

export default TextArea;
