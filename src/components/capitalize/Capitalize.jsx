import CustomButton from "../buttonstyling/ButtonStyling";

function Capitalize({ textValue, func, buttonSetFunc }) {
  const clickHandler = () => {
    func(textValue.toUpperCase());
    buttonSetFunc(true);
  };

  return (
    <div>
      <CustomButton onClick={clickHandler}>Capitalize</CustomButton>
    </div>
  );
}

export default Capitalize;
