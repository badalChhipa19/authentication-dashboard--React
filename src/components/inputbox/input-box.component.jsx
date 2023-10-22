import "./input-box.scss";

const handleKeyPress = (event) => {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the Enter keypress
  }
};
const InputBox = (props) => {
  const {
    labelContent,
    type,
    inputId,
    names,
    inputClass = "",
    placeholder = "",
    values = "",
    isRequire = true,
    onChangeHandler = () => {
      return "";
    },
  } = props;

  return (
    <div className={`input__box ${inputClass}`}>
      <label htmlFor={inputId} className="label">
        {labelContent}
      </label>
      <input
        type={type}
        id={inputId}
        className="input"
        required={isRequire}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={values}
        name={names}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default InputBox;
