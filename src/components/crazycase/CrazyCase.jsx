import CustomButton from "../buttonstyling/ButtonStyling";

const crazyFunc = (value) => {
  if (value.charCodeAt(0) >= 97 && value.charCodeAt(0) <= 122) {
    return value.toUpperCase();
  } else if (value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90) {
    return value.toLowerCase();
  } else {
    return value;
  }
};

function CrazyCase({ func, textValue, buttonSetFunc }) {
  const clickHandler = () => {
    let newValue = "";

    for (let i = 0; i < textValue.length; i++) {
      newValue = newValue + crazyFunc(textValue[i]);
    }

    func(newValue);

    buttonSetFunc(true);
  };

  return (
    <div>
      <CustomButton onClick={clickHandler}>CrazyCase</CustomButton>
    </div>
  );
}

export default CrazyCase;
