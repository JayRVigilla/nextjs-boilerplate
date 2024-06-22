/** Typography documentation
 *
 * REQUIRED
 * text: string of text to render
 * variant: lines up the styles seen to Figma named Typography
 *
 * htmlTag (optional): "span" | "p" | "h1" | "h2" | "h3" | "h4"
 *    will override the automatic assignment from variant
 *
 * color (optional):  "light" | "dark" | ...TBD
 *  will not take a color hexcode.
 *
 * className (optional): used for
 *  1. one off CSS changes. Otherwise can extend the component.
 *  2. bold. Some Figma Typography Names exist with "Bold". These share the same styling EXCEPT for font-weight. In  variant bSm (WF Body/Body Small) we add className="bold" and access the defined font-weight for "WF Body Bold/Body Bold Small".
 *
 */
import "./styles.css";

const mapVariantToHtmlElement = {
  // Headings
  hLg: "h1" /* WF Headings/Heading L */,
  hMd: "h2" /* WF Headings/Heading M; */,
  hSm: "h3" /* WF Headings/Heading S */,
  hXs: "h4" /* WF Headings/Heading XS */,
  // Body Text

  // !! variant not yet seen in Figma
  // bLg: "p", /* WF Body/Body Large */

  bMd: "p" /* WF Body/Body Medium */,
  bSm: "p" /* WF Body/Body Small */,
  bXs: "p" /* styleName: WF Body/Body Extra Small; */,
  // Buttons/Links
  btnMd: "span" /* WF Buttons/Button Medium */,
  btnSm: "span" /* WF Buttons/Button Small */,
};

export const Typography = ({
  text,
  variant,
  color = "black",
  className,
  htmlTag,
}) => {
  /**
   * function generates an HTML Element of the string passed in.
   * e.g. DynamicallyCreatedHtmlElement("taco") => <taco> ... </taco>
   * */
  const DynamicallyCreatedHtmlElement = (
    //  causes "p" to return a <p>, prevents:
    // JSX element type 'HtmlElement' does not have any construct or call signatures.
    HtmlElement
  ) => {
    return (
    <HtmlElement
      className={`root Typography ${variant} ${className ? className : ''} color ${color}`}>
      {text}
    </HtmlElement>
  )};

  return DynamicallyCreatedHtmlElement(
    htmlTag ?? mapVariantToHtmlElement[variant]
  );
};
