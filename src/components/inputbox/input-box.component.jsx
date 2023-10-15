import "./input-box.scss";

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
      />
    </div>
  );
};

export default InputBox;
