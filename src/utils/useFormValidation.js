import { useState, useCallback } from "react";

export default function useFormValidation(errorMessages = {}) {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const { name, value } = target;

    const error = getErrorMessage(target);
    target.setCustomValidity(error);

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  const getErrorMessage = (input) => {
    const { name, validity } = input;

    for (let key in validity) {
      if (validity[key] === true) {
        return errorMessages[name]?.[key] || "";
      }
    }

    return " ";
  };

  return { values, errors, isValid, handleChange, resetForm };
}
