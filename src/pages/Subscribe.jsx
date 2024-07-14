// src/pages/Subscribe.jsx
import NewsletterForm from '../components/NewsletterForm';

/**
 * Subscribe page component to allow users to subscribe to the newsletter.
 */
const Subscribe = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h1>
      <p className="mb-4">
        Stay updated with the latest news articles delivered directly to your inbox. Subscribe to our newsletter by
        entering your email below.
      </p>
      <NewsletterForm />
    </div>
  );
};

export default Subscribe;