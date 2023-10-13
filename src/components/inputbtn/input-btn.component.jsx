import "./input-btn.style.scss";

const InputBtn = ({ value, btnClass, btnType, btnName }) => {
  return (
    <input
      type={btnType}
      className={`submit__btn  ${btnClass}`}
      value={value}
      name={btnName}
    />
  );
};

export default InputBtn;
