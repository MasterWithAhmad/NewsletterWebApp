// src/components/NewsletterForm.jsx
import { useForm } from '../hooks/useForm';
import Swal from 'sweetalert2';

function NewsletterForm() {
  const { formData, handleChange, handleSubmit } = useForm({
    initialValues: { email: '' },
    onSubmit: () => {
      if (!formData.email.trim()) {
        Swal.fire('Oops!', 'Please enter your email.', 'error');
        return;
      }
      // Perform your submit logic here
      Swal.fire('Subscribed!', 'You have subscribed successfully!', 'success');
    },
  });

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        className="p-2 border rounded w-full mb-4"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Subscribe
      </button>
    </form>
  );
}

export default NewsletterForm;
