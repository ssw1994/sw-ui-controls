import React from "react";
import ModalStyle from "./Modal.module.css";
import ReactDOM from "react-dom";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
FontAwesomeIcon;
export const Modal = (props) => {
  const { children, onClose, open } = props;
  let portalElement = document.getElementById("portal");
  if (!open) return null;
  if (!portalElement) {
    const divNode = document.createElement("div");
    divNode.id = "portal";
    document.getElementsByTagName("body")[0].appendChild(divNode);
    portalElement = document.getElementsByTagName("portal");
  }
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
