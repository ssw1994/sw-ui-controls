export default function validator({
  required,
  min,
  max,
  pattern,
  minLength,
  maxLength,
  value,
}) {
  const errors = {
    required: false,
    pattern: false,
    min: false,
    max: false,
    minLength: false,
    maxLength: false,
  };
  const isString = () => {
    return isNaN(value);
  };

  const isNumber = () => {
    return !isNaN(value);
  };

  const validate = () => {
    if (required) {
      errors.required = !value
        ? Array.isArray(value)
          ? value.length > 0
          : true
        : false;
    }
    if (pattern && value) {
      const p = pattern.replace("/", "'");
      if (isString()) {
        errors.pattern = !value.match(new RegExp(p)) ? true : false;
      }
    }
    if (min) {
      errors.min = isNumber() && value < min ? true : false;
    }
    if (max) {
      errors.max = isNumber() && value > max ? true : false;
    }

    if (minLength) {
      errors.minLength =
        (isString() && !value) || value.length < minLength ? true : false;
    }

    if (maxLength) {
      errors.maxLength = isString() && value?.length > maxLength ? true : false;
    }
    return errors;
  };

  return validate();
}
