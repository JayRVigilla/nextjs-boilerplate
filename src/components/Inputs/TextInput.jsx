/** TextInput documentation */
import "./styles.css";
import { InputLabel } from "./InputLabel";

export const BasicTextInput = ({
  value,
  onChange,
  label,
  name,
  placeholder,
  className,
  required = false,
}) => {
  return (
    <span className={`root TextInput ${className ? className : ""}`}>
      <label htmlFor={name}>
        <InputLabel text={label} required={required} />
        <input
          className={`BasicTextInput`}
          type="text"
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          required={required}
        />
      </label>
    </span>
  );
};

export const EmailInput = ({
  value,
  onChange,
  label,
  name,
  placeholder,
  className,
}) => {
  return (
    <span className={`root TextInput ${className ? className : ""}`}>
      <label htmlFor={name}>
        <InputLabel text={label} />
        <input
          className={`EmailInput`}
          type="email"
          value={value}
          onChange={onChange}
          name={name}
          placeholder={placeholder}
        />
      </label>
    </span>
  );
};
