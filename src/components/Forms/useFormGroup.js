import React, { useEffect, useMemo, useState } from "react";
import validator from "../Input/useValidator";
export default function useFormGroup(props) {
  const [form, updateForm] = useState({});
  const { formvalidator } = props;
  const formValue = useMemo(() => {
    return Object.keys(form)
      .map((control) => {
        return {
          [control]: form[control]?.value ?? "",
        };
      })
      .reduce((prev, item) => {
        return {
          ...prev,
          ...item,
        };
      }, {});
  }, [form]);

  const formError = useMemo(() => {
    if (!formvalidator) return null;
    if (formvalidator instanceof Array && formvalidator?.length === 0)
      return null;
    for (let validator of formvalidator) {
      const error = validator(formValue);
      if (error && error instanceof Array && error?.length >= 1) {
        return error[1];
      }
    }
    return null;
  }, [formValue, formvalidator]);

  const valid = useMemo(() => {
    const isValid = Object.keys(form).every((control) => {
      const { errors } = form[control];
      if (errors) {
        return Object.values(errors).every((error) => error === false);
      }
      return true;
    });
    return isValid && !formError;
  }, [form, formError]);

  const updateControlValidation = (v = "", props) => {
    const { value, ...otherProps } = props;
    return {
      value: v,
      errors: validator({ value: v, ...otherProps }),
    };
  };

  useEffect(() => {
    const { children } = props;
    const formState = {};
    React.Children.forEach(children, (child, index) => {
      const { name, value } = child.props;
      if (name) {
        formState[name] = updateControlValidation(value ?? "", child.props);
      }
    });
    updateForm({ ...formState });
  }, [props]);

  const updateFormValidation = (props, value) => {
    form[props.name] = updateControlValidation(value, props);
    updateForm({ ...form });
  };

  return {
    ...props,
    form,
    updateForm: updateFormValidation,
    valid,
    formValue,
    formError,
  };
}
