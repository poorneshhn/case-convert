import CustomButton from "../buttonstyling/ButtonStyling";

function LowerCase({ func, textValue }) {
  const clickHandler = () => {
    func(textValue.toLowerCase());
  };
  return (
    <div>
      <CustomButton onClick={clickHandler}>LowerCase</CustomButton>
    </div>
  );
}

export default LowerCase;
