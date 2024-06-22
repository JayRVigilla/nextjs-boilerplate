/** Modal documentation
 *
 * A Modal can be thought of as an element floating on the top layer
 * where work/interaction can be done. Forms, action buttons, business
 * that needs to be taken care of to proceed. A "Popover" is used for
 * showing text/data that is shown without a requirement of interaction.
 */
import { useEffect, useRef } from "react";
import {CloseCircleIcon} from "../icons/CloseCircleIcon";
import "./styles.css";

type tModalProps = {
  children: any;
  className?: string;
  isOpen: boolean;
}

export const Modal = ({ children, className, isOpen }: tModalProps) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeModal = () => {dialogRef?.current?.close()};

  useEffect(() => {
    if (!dialogRef?.current) return;
    // assures that Modal is opened when prop changes
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
