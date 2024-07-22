import { useState } from 'react';
import Swal from 'sweetalert2';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form validation (optional)
    if (!name || !email || !message) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Please fill in all fields!',
      });
      return;
    }

    // Process form submission (e.g., send data to server, reset form)
    // Example: Send data to server using Axios or fetch API
    // Reset form fields after successful submission
    setName('');
    setEmail('');
    setMessage('');

    // Show success message using SweetAlert
    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you for contacting us. We will get back to you soon.',
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-left">Name</label>
          <input
            type="text"
            id="name"
            className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-left">Email Address</label>
          <input
            type="email"
            id="email"
            className="form-input mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-left">Message</label>
          <textarea
            id="message"
            className="form-textarea mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
            rows="4"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
