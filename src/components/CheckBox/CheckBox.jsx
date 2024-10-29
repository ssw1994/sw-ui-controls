import { forwardRef, useId } from "react";
import "./CheckBox.scss";
export const CheckBox = forwardRef((props, ref) => {
  const { label, ...otherprops } = props;
  const id = useId();
  return (
    <div className="sw-checkbox">
      <label htmlFor={id}>{label}</label>
      <input type="checkbox" {...otherprops} ref={ref} id={id} />
    </div>
  );
});
