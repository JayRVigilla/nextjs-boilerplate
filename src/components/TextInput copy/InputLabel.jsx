// Unified label text styling across the different Text Inputs

import { Typography } from "../../sharedComponents/Typography/Typography";

export const InputLabel = ({ text, required=false }) => {
  return (
    <Typography
      className={`bold ${required ? "required": ''}`}
      variant="bSm"
      text={text}
      htmlTag="span"
      color="purple-header"
    />
  );
};
