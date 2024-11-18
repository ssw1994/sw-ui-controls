import React, { useEffect } from "react";
import ModalStyle from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import useBodyScrollLock from "./useBodyScrollLock";
FontAwesomeIcon;
export const Modal = (props) => {
  const { children, onClose, open } = props;
  useBodyScrollLock(open);
  let portalElement = document.getElementsByTagName("body")[0];
  if (!open) return null;

  return ReactDOM.createPortal(
    <div>
      <div className={ModalStyle.OVERLAY_STYLES}></div>
      <div className={ModalStyle.MODAL_STYLES}>
        <Button onClick={onClose}>
          <FontAwesomeIcon icon={faWindowClose} />
        </Button>
        {children}
      </div>
    </div>,
    portalElement
  );
};
