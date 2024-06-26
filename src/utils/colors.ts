/**
 * These are color variables to use in .ts/.tsx files. The
 * naming conventions matches with the css color variables
 * (camelCase for .ts/.tsx, kebab-case for css). When adding or
 * changing a color variable, make sure to update in this file
 * and src/app/globals.css .
 */

const style = getComputedStyle(document.body);

export const COLORS = {
  white: style.getPropertyValue("--white"),
  black: style.getPropertyValue("--black"),
};
