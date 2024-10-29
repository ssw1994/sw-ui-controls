import { forwardRef } from "react";
import "./Button.scss";
export const Button = forwardRef((props, ref) => {
  return (
    <button {...props} className={`${props.className} sw-button`} ref={ref}>
      {props.children}
    </button>
  );
});
