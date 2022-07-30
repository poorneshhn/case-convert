import CustomButton from "../buttonstyling/ButtonStyling";

function Capitalize({ textValue, func }) {
  const clickHandler = () => {
    func(textValue.toUpperCase());
  };

  return (
    <div>
      <CustomButton onClick={clickHandler}>Capitalize</CustomButton>
    </div>
  );
}

export default Capitalize;
