/** Modal documentation
 *
 * A Modal can be thought of as an element floating on the top layer
 * where work/interaction can be done. Forms, action buttons, business
 * that needs to be taken care of to proceed. A "Popover" is used for
 * showing text/data that is shown without a requirement of interaction.
 */
import { useEffect, useRef } from "react";
import { CloseCircleIcon } from "../../../icons/CloseCircleIcon";
import "./styles.css";

export const Modal = ({ children, className, isOpen, closeModal }) => {
  const dialogRef = useRef();
  useEffect(() => {
    if (!dialogRef?.current) return;

    if (isOpen) {
      dialogRef.current.showModal();
    } else {
      dialogRef.current.close();
    }
  }, [isOpen, dialogRef]);

  return (
    <dialog
      ref={dialogRef}
      className={`root Modal ${className ? className : ""}`}
    >
      <div className="close-button-container">
        <button onClick={closeModal}>
          <CloseCircleIcon />
        </button>
      </div>

      {children}
    </dialog>
  );
};
