import React, {
  createRef,
  forwardRef,
  useContext,
  useEffect,
  useId,
  useState,
} from "react";
import { Input } from "../Input/Input";
import { FormContext } from "./FormGroup";

export const FormControl = forwardRef((props, ref) => {
  if (!ref) {
    ref = createRef();
  }
  const { updateForm } = useContext(FormContext);
  const { type } = props;
  const inputTypes = [
    "email",
    "text",
    "search",
    "radio",
    "checkbox",
    "password",
    "date",
  ];

  const [value, updateValue] = useState("");

  useEffect(() => {
    updateForm(props, value);
  }, [props, value]);
  if (inputTypes.includes(type)) {
    return (
      <Input
        {...props}
        ref={ref}
        value={value}
        onChange={(e) => updateValue(e.target.value)}
      />
    );
  }
  return <h1>Invalid type</h1>;
});
