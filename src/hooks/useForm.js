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

  /**
   * Handles the form submission by preventing the default form behavior and calling the provided `onSubmit` function with the current form data.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event.
   */
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
