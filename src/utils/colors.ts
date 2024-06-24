const style = getComputedStyle(document.body);

export const COLORS = {
  white: style.getPropertyValue("--white"),
  black: style.getPropertyValue("--black"),
};
