import React, { forwardRef } from "react";
import ButtonStyle from "./Button.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
export const Button = forwardRef((props, ref) => {
  const { isLoading, ...otherProps } = props;
  return (
    <button
      {...otherProps}
      className={`${props.className} ${ButtonStyle.swbutton}`}
      ref={ref}
      disabled={isLoading ? true : props?.disabled}
    >
      {props.children}
      {isLoading && (
        <FontAwesomeIcon
          icon={faSpinner}
          className={ButtonStyle.spinner_icon}
        />
      )}
    </button>
  );
});
