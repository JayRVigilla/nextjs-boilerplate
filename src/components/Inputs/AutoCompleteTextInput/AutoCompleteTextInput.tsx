/** AutoComplete
 * @params value - string
 * @params onChange - function
 * @params label - string
 * @params name - string
 * @params placeholder - string
 * @params className - string
 * @params required - boolean: will add required asterisk
 * @params options - array of strings to filter while typing
 */

import React, { useState, useEffect } from "react";
import { InputLabel } from "../InputLabel";
import { Typography } from "../../Typography/Typography";
import { ChevronIcon } from "@icons/ChevronIcon";
import "../styles.css"; // shared TextInput styles
import "./styles.css"; // AutoCompleteInput specific

export type tAutoCompleteTextInputProps = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLOptionElement>) => void;
  label: string;
  name: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  options: string[];
};

export const AutoCompleteTextInput = ({
  value,
  onChange,
  label,
  name,
  placeholder,
  className,
  required = false,
  options,
}:tAutoCompleteTextInputProps) => {
  const [optionsList, setOptionsList] = useState(options ?? []);
  const [isOpen, setIsOpen] = useState(false);

  const filterOptions = (text: string) => {
    return [...options].filter((opt) => {
      return opt.toLowerCase().includes(text.toLowerCase());
    });
  };

  // input value changes state
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event);
    const filtered = filterOptions(event.target.value.trim());
    setOptionsList(filtered);
  };

  const handleOptionSelect = (event: React.MouseEvent<HTMLOptionElement>) => {
    onChange(event);
    // const filtered = filterOptions(event.target.value.trim());

    // Type assertion to ensure TypeScript knows event.target is an HTMLOptionElement
    const target = event.target as HTMLOptionElement;

    // Access the value property of HTMLOptionElement
    const filtered = filterOptions(target.value);
    setOptionsList(filtered);
  };

  useEffect(() => {
    if (value.trim().length) setIsOpen(true);
  }, [value]);

  return (
    <span
      className={`root TextInput AutoCompleteTextInput${className ? className : ""}`}
    >
      <label htmlFor={name}>
        <InputLabel text={label} required={required} />
        <span className={`auto-complete-container ${isOpen ? "open" : ""}`}>
          <input
            className={`AutoComplete`}
            type="text"
            value={value}
            onChange={handleChange}
            name={name}
            placeholder={placeholder}
            required={required}
          />
          {/* can also open the list of autocomplete options manually */}
          <span
            className={`fake-button ${isOpen ? "flipped" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <ChevronIcon />
          </span>
        </span>

        {isOpen && (
          <div className="options-list">
            {optionsList.map((opt) => (
              <option
                key={opt}
                onClick={(event) => {
                  // handleChange(event);
                  handleOptionSelect(event);
                  setIsOpen(false);
                }}
              >
                <Typography variant={"bMd"} color="purple-header" text={opt} />
              </option>
            ))}
          </div>
        )}
      </label>
    </span>
  );
};
