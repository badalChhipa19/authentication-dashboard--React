import "./input-btn.style.scss";

const InputBtn = ({
  value,
  btnClass,
  btnType,
  btnName,
  onClickHandler = () => {
    return;
  },
}) => {
  return (
    <input
      onClick={onClickHandler}
      type={btnType}
      className={`submit__btn  ${btnClass}`}
      value={value}
      name={btnName}
    />
  );
};

export default InputBtn;
