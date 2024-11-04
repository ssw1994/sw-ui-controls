import React, { forwardRef } from "react";
import ButtonStyle from "./Button.module.css";
export const Button = forwardRef((props, ref) => {
  return (
    <button
      {...props}
      className={`${props.className} ${ButtonStyle.swbutton}`}
      ref={ref}
    >
      {props.children}
    </button>
  );
});
