import { useState } from "react";
import { InputLabel } from "../InputLabel";
import { EyeIcon } from "../../../../icons/EyeIcon";
import "../styles.css"; // shared TextInput styles
import "./styles.css"; // PasswordInput specific
import { EyeBlindIcon } from "../../../../icons/EyeBlindIcon";

export const PasswordInput = ({
  value,
  onChange,
  label,
  name,
  placeholder,
  className,
  showToggle = false,
}) => {
  const [showText, setShowText] = useState(false);
  const toggleEye = () => {
    setShowText(!showText);
  };

  return (
    <span
      className={`root TextInput PasswordInput ${className ? className : ""}`}
    >
      <label htmlFor={name}>
        <InputLabel text={label} />
        <span className="password-container">
          <input
            className={`PasswordInput`}
            type={showText ? "text" : "password"}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
          />

          {showToggle && (
            <span
              className="fake-button"
              aria-label={`${showText ? "hide" : "show"} password`}
              onClick={toggleEye}
            >
              {showText ? <EyeBlindIcon /> : <EyeIcon />}
            </span>
          )}
        </span>
      </label>
    </span>
  );
};
