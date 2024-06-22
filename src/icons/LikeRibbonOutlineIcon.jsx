/**
 * LikeRibbonOutlineIcon
 *
 * The SVG path is made of two lines: An outerLine and innerLine. The space between
 * them gets filled in to show the line.
 *
 * When isFilled === true, innerPath is not rendered and the entire area inside outerPath is filled.
 */

export const LikeRibbonOutlineIcon = ({ color = "#FFA400", isFilled }) => {
  return (
    <svg
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill={color}
        xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
        d={`M3 0
          C2.20435 0 1.44129 0.31607 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3
          V19C0 19.3746 0.209347 19.7178 0.542418 19.8892
          C0.87549 20.0606 1.27642 20.0315 1.58124 19.8137
          L8 15.2289L14.4188 19.8137C14.7236 20.0315 15.1245 20.0606 15.4576 19.8892
          C15.7907 19.7178 16 19.3746 16 19
          V3C16 2.20435 15.6839 1.44129 15.1213 0.87868
          C14.5587 0.316071 13.7957 0 13 0
          H3
          Z
          ${isFilled ?
          '' :
            `M2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2
          H13C13.2652 2 13.5196 2.10536 13.7071 2.29289
          C13.8946 2.48043 14 2.73478 14 3
          V17.0568L8.58124 13.1863
          C8.23354 12.9379 7.76646 12.9379 7.41876 13.1863
          L2 17.0568V3
          C2 2.73478 2.10536 2.48043 2.29289 2.29289
          Z`}`}
          fill={color}
        />
      </svg>
  );
};
