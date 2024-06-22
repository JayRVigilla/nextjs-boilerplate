import { InputLabel } from "../InputLabel";
import "../styles.css"; // shared TextInput styles
import "./styles.css"; // TextArea specific

export const TextArea = ({
  onChange,
  value,
  classes,
  placeholder,
  rows,
  cols,
  id,
  name,
  resize = true,
  label,
  className,
}) => {
  return (
    <span className={`root TextInput ${className ? className : ""}`}>
      <label htmlFor={name}>
        <InputLabel text={label} />
        <textarea
          className={`TextArea ${classes ? classes : ""} ${resize ? resize : "fixed-size"}`}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          rows={rows}
          cols={cols}
          name={name}
          id={id}
        />
      </label>
    </span>
  );
};
