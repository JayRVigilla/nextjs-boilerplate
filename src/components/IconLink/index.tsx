/** IconLink documentation
 */

import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import styles from "./styles.module.css";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

export interface IconLinkProps {
  "data-test-id"?: string;
  href: string;
  label: string;
  icon: IconDefinition;
}

export const IconLink = ({href, label, icon, "data-test-id": dataTestId}: IconLinkProps) => {
  return (
    <a
      href={href}
      rel="noreferrer"
      target="_blank"
      key={`link-${label}`}
      aria-label={label}
      data-test-id={dataTestId}
      className={clsx(styles.root)}
    >
      <span className='label'>{label}</span>
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};
