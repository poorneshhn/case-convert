import ButtonsComponent from "./components/ButtonsComponent";
import HeaderBodyComponent from "./components/HeaderBodyComponent";
import { useState } from "react";

function App() {
  const [textValue, setTextValue] = useState("");
  const updateText = (value) => {
    setTextValue(value);
  };

  return (
    <div className="App">
      <HeaderBodyComponent func={updateText} textValue={textValue} />
      <ButtonsComponent func={updateText} textValue={textValue} />
    </div>
  );
}

export default App;
