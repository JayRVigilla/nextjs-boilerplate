import { useState } from "react";
import { InputLabel } from "../InputLabel";
import { ListBadge } from "./ListBadge/ListBadge";
import "./../styles.css"; // shared TextInput styles
import "./styles.css"; // InputTextList specific
import { CloseCircleIcon } from "../../../../icons/CloseCircleIcon";

export const InputTextList = ({
  value, // array of strings
  setValue,
  label,
  name,
  placeholder,
  className,
  required = false,
  maxBadges=5,
}) => {
  // the value of what is in the input
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <span
      className={`root TextInput InputTextList ${className ? className : ""}`}
    >
      <label htmlFor={name}>
        <InputLabel text={label} required={required} />
        <span className="input-container">
          <input
            className={`InputTextList`}
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            name={name}
            placeholder={placeholder}
            required={required}
          />
          {/* create an add "button" or otherwise preventDefault on pressing enter */}
          <span
            className="fake-button"
            onClick={() => {
              if (inputValue && value.length < maxBadges) {
                setValue([...value, inputValue.trim()]);
                setInputValue("");
              }
            }}
          >
            <CloseCircleIcon />
          </span>
        </span>

        <div className="badge-list">
          {/* map badges from value */}
          {value.map((item) => (
            <ListBadge
              text={item}
              key={item}
              onClick={(event) => {
                const filtered = value.filter((val) => val !== item);
                setValue(filtered);
              }}
            />
          ))}
        </div>
      </label>
    </span>
  );
};
