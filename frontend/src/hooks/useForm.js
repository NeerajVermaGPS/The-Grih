import { useState } from 'react';

const useForm = (initialValues = {}, validateOnChange = false, validationSchema = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, type } = e.target;
    let value;

    if (type === 'checkbox') {
      value = e.target.checked;
    } else if (type === 'file') {
      value = e.target.files;
    } else if (type === 'radio') {
      value = e.target.value;
    } else {
      value = e.target.value;
    }

    setValues({
      ...values,
      [name]: value
    });

    if (validateOnChange) {
      validate({ [name]: value });
    }
  };

  const validate = (fieldValues = values) => {
    let temp = { ...errors };

    for (const key in fieldValues) {
      const value = fieldValues[key];
      const validator = validationSchema[key];

      if (validator) {
        const error = validator(value, values);
        temp[key] = error || '';
      }
    }

    setErrors({
      ...temp
    });

    return Object.values(temp).every(x => x === '');
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return { values, setValues, errors, setErrors, handleChange, validate, resetForm };
};

export default useForm;