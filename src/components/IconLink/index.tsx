/** IconLink documentation
 */
import React, { useEffect, useState } from "react";
import {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import "./styles.css";

export interface IconLinkProps {
"data-test-id"?: string;
}

export const IconLink = () => {
  // * hooks
  // const hook = () => {};

  // * state
  // const [something, useSomething] = useState(undefined);

  // * useEffects
  // useEffect(() => {
  // first
  // return ({}: IconLinkProps) => {
  // second
  // }
  // }, [third])

  return (
    <a href={link.href} rel="noreferrer" target="_blank" key={`link-${link.label}`} aria-label={link.label}>
                <span className='label'>{link.label}</span>
                <FontAwesomeIcon icon={link.icon} />
            </a>
  );
};
