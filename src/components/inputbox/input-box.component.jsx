import "./input-box.scss";

const InputBox = (props) => {
  const { labelContent, type, inputId, inputClass = "" } = props;

  return (
    <div className={`input__box ${inputClass}`}>
      <label htmlFor={inputId} className="label">
        {labelContent}
      </label>
      <input type={type} id={inputId} className="input" />
    </div>
  );
};

export default InputBox;
