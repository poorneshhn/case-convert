import CustomButton from "../buttonstyling/ButtonStyling";

function LowerCase({ func, textValue, buttonSetFunc }) {
  const clickHandler = () => {
    func(textValue.toLowerCase());
    buttonSetFunc(true);
  };
  return (
    <div>
      <CustomButton onClick={clickHandler}>LowerCase</CustomButton>
    </div>
  );
}

export default LowerCase;
