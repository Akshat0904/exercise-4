import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface IProps {
  open: boolean;
  children: ReactNode;
}

const Modal = ({ open, children }: IProps) => {
  if (!open) return null; // Don't render anything if modal is closed

  return createPortal(
    <div>{children}</div>,
    document.getElementById("portal")!
  );
};

export default Modal;
