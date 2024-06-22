/** ListBadge documentation
 */
import { CloseCircleIcon } from "../../../../../icons/CloseCircleIcon";
import { Typography } from "../../../Typography/Typography";
import "./styles.css";

export const ListBadge = ({ text, onClick }) => {
  return (
    <span className="root ListBadge" onClick={onClick}>
      <Typography
        color="purple-header"
        text={text}
        variant={"bXs"}
        className={"ListBadge"}
      />
      <CloseCircleIcon />
    </span>
  );
};
