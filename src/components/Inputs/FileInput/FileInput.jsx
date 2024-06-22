/** Modal documentation
 *
 * A Modal can be thought of as an element floating on the top layer
 * where work/interaction can be done. Forms, action buttons, business
 * that needs to be taken care of to proceed. A "Popover" is used for
 * showing text/data that is shown without a requirement of interaction.
 */
import { FloppyDiskIcon } from "../../../../icons/FloppyDiskIcon";
import { InputLabel } from "../InputLabel";
import { Typography } from "../../Typography/Typography";
import "./styles.css";

export const FileInput = ({
  // value will be of type "File": https://developer.mozilla.org/en-US/docs/Web/API/File_API/Using_files_from_web_applications
  value,
  handleChange,
  label,
  name,
  placeholder,
}) => {
  return (
    <span className="root FileInput">
      <InputLabel text={label} />
      <label htmlFor={`${name}-file`}>
        <FloppyDiskIcon
          // display different color when file is selected
          color={value ? "#775DA6" : undefined}
        />
        <Typography
          variant="btnSm"
          // display file name when one is selected
          text={value ? value.name : placeholder}
          // display different color when file is selected
          color={value ? "purple" : "purple-header"}
        />
        <input
          type="file"
          name={name}
          id={`${name}-file`}
          onChange={handleChange}
        />
      </label>
    </span>
  );
};
