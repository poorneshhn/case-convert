import Header from "./header/Header";
import TextArea from "./textarea/TextArea";

function HeaderBodyComponent({ func, textValue }) {
  return (
    <div>
      <Header />
      <TextArea func={func} textValue={textValue} />
    </div>
  );
}

export default HeaderBodyComponent;
