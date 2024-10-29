import { forwardRef } from "react";
import "./Card.scss";
export const Card = forwardRef((props, ref) => {
  return (
    <div className="sw-card" ref={ref} {...props}>
      {props.children}
    </div>
  );
});
