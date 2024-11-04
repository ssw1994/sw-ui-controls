import React, { forwardRef, useContext, useEffect, useState } from "react";
import { Input } from "../Input/Input";
import { FormContext } from "./FormGroup";

export const FormControl = forwardRef((props, ref) => {
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
  }, [value]);

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
