// src/hooks/useForm.js
import { useState } from 'react';

export const useForm = ({ initialValues, onSubmit }) => {
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};
