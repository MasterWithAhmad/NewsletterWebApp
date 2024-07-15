// src/pages/News.jsx
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useFetchNews } from '../hooks/useFetchNews';
/**
 * Imports the Spinner component, which is used to display a loading spinner.
 * This component is likely used in the News component to indicate that data is being fetched.
 */
import Spinner from '../components/Spinner';
import noImage from '../images/Placeholder.jpeg'; // Import the placeholder image

function News() {
  const [page, setPage] = useState(1);
  const { articles, error, loading } = useFetchNews(page);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  if (loading) return <Spinner />;
  if (error) return <p>Error loading articles.</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.url}
            className="bg-white rounded-lg shadow-md p-4 transform hover:-translate-y-2 transition-transform duration-300"
          >
            <img
              src={article.urlToImage || noImage}
              alt={article.title}
              className="w-full h-auto rounded-lg mb-4 object-cover"
            />
            <h3 className="text-xl font-bold mb-2">{article.title}</h3>
            <p className="text-gray-600 mb-2">{article.publishedAt}</p>
            <p className="text-gray-500">{article.description}</p>
            <Link
              to={`/news/${encodeURIComponent(article.url)}`}
              state={{ article }}
              className="text-blue-500 hover:text-blue-700 transition-colors duration-200 mt-2 inline-flex items-center"
            >
              Read more <span className="ml-2">→</span>
            </Link>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-8">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={`px-4 py-2 rounded ${page === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white hover:bg-blue-600'} transition-colors duration-200`}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((prev) => prev + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default News;
