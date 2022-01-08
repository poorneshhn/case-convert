import ButtonsComponent from "./components/ButtonsComponent";
import HeaderBodyComponent from "./components/HeaderBodyComponent";
import Popup from "./components/popup/Popup";
import { useState, useEffect } from "react";

function App() {
  const [textValue, setTextValue] = useState("");
  const [buttonClick, setButtonClick] = useState(false);

  const updateText = (value) => {
    setTextValue(value);
  };

  let time;
  useEffect(() => {
    clearTimeout(time);
    time = setTimeout(() => {
      setButtonClick(false);
    }, 1500);
  }, [buttonClick]);

  return (
    <div className="App">
      <Popup buttonClick={buttonClick} />
      <HeaderBodyComponent func={updateText} textValue={textValue} />
      <ButtonsComponent
        func={updateText}
        textValue={textValue}
        buttonSetFunc={setButtonClick}
      />
    </div>
  );
}

export default App;
