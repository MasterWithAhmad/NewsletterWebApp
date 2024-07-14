// src/components/NewsCard.jsx
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

function NewsCard({ article }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transform hover:-translate-y-2 transition-transform duration-300">
      <img
        src={article.urlToImage}
        alt={article.title}
        className="w-full h-auto rounded-lg mb-4 object-cover"
      />
      <h3 className="text-xl font-bold mb-2">{article.title}</h3>
      <p className="text-gray-600 mb-2">{article.publishedAt}</p>
      <p className="text-gray-500">{article.description}</p>
      <Link
        to={`/news/${encodeURIComponent(article.url)}`}
        state={{ article }}
        className="text-blue-500 hover:text-blue-700 transition-colors duration-200 mt-2 inline-block"
      >
        Read more
      </Link>
    </div>
  );
}

NewsCard.propTypes = {
  article: PropTypes.shape({
    urlToImage: PropTypes.string,
    title: PropTypes.string,
    publishedAt: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default NewsCard;
