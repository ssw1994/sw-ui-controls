import React, { createContext, useContext } from "react";
import useFormGroup from "./useFormGroup";
import { Button as GlobalButton } from "../Button/Button";
export const FormContext = createContext();

export function FormButton(buttonProps) {
  const { onSubmit, valid, formValue } = useContext(FormContext);

  return (
    <div className="flex-row center-items">
      <GlobalButton
        {...buttonProps}
        disabled={!valid}
        onClick={() => onSubmit(formValue)}
      />
    </div>
  );
}

export default function FormGroup(props) {
  const updatedProps = useFormGroup(props);
  const { onSubmit, children, formValue, formError } = updatedProps;
  return (
    <FormContext.Provider value={updatedProps}>
      <form
        {...props}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(formValue);
        }}
      >
        {children}

        <p className="error">{formError}</p>
      </form>
    </FormContext.Provider>
  );
}
