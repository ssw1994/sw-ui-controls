import { forwardRef, useId } from "react";
import "./RadioButton.scss";
export const RadioButton = forwardRef((props, ref) => {
  const { label, ...otherprops } = props;
  const id = useId();
  return (
    <div className="sw-radio">
      <label htmlFor={id}>{label}</label>
      <input type="radio" {...otherprops} id={id} ref={ref} />
    </div>
  );
});
