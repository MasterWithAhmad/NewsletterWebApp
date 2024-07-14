import { useLocation, Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import ModalImage from 'react-modal-image';
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { useFetchNews } from '../hooks/useFetchNews';
import Spinner from '../components/Spinner';

const PLACEHOLDER_IMAGE_URL = '/src/images/Placeholder.jpeg';

const NewsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { article } = location.state || {};
  const [currentArticle, setCurrentArticle] = useState(article);
  const { articles, error, loading } = useFetchNews(1);
  const [articleLoading, setArticleLoading] = useState(!article);

  useEffect(() => {
    if (!currentArticle && location.state) {
      setCurrentArticle(location.state.article);
      setArticleLoading(false);
    }
  }, [location.state, currentArticle]);

  if (articleLoading || loading) return <Spinner />; // Show spinner during loading states
  if (error) return <p>Error loading article.</p>;
  if (!currentArticle) return <p>Article not found.</p>;

  const shareUrl = window.location.href;

  return (
    <div className="p-4">
      <nav className="mb-4">
        <Link to="/" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-500">{currentArticle.title}</span>
      </nav>
      <button
        onClick={() => navigate(-1)}
        className="flex items-center mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-200"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>
      <h1 className="text-3xl font-bold mb-4">{currentArticle.title}</h1>
      <div className="relative mb-6">
        <ModalImage
          small={currentArticle.urlToImage || PLACEHOLDER_IMAGE_URL}
          large={currentArticle.urlToImage || PLACEHOLDER_IMAGE_URL}
          alt={currentArticle.title}
          className="w-full h-auto rounded-lg shadow-lg border-4 border-gray-300 object-cover cursor-pointer"
        />
      </div>
      <p className="text-lg mb-4">{currentArticle.description}</p>
      <div className="prose max-w-none mb-8">{currentArticle.content}</div>
      <div className="flex items-center mb-4">
        <a
          href={currentArticle.url}
          className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read on Original Source <FaExternalLinkAlt className="ml-2" />
        </a>
      </div>
      <div className="flex justify-center space-x-4 my-4">
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
          className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="mr-2" />
        </a>
        <a
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}`}
          className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="mr-2" /> 
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
          className="flex items-center text-blue-500 hover:text-blue-700 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="mr-2" />
        </a>
      </div>
      {/* Related Articles Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Related Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.slice(0, 3).map((relatedArticle) => (
            <div
              key={relatedArticle.url}
              className="bg-white rounded-lg shadow-md p-4 transform hover:-translate-y-2 transition-transform duration-300"
            >
              <img
                src={relatedArticle.urlToImage || PLACEHOLDER_IMAGE_URL}
                alt={relatedArticle.title}
                className="w-full h-auto rounded-lg mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{relatedArticle.title}</h3>
              <p className="text-gray-600 mb-2">{relatedArticle.publishedAt}</p>
              <p className="text-gray-500">{relatedArticle.description}</p>
              <Link
                to={`/news/${encodeURIComponent(relatedArticle.url)}`}
                state={{ article: relatedArticle }}
                className="text-blue-500 hover:text-blue-700 transition-colors duration-200 mt-2 inline-flex items-center"
                onClick={() => setArticleLoading(true)} // Set loading to true when clicking "Read More"
              >
                Read more <FaExternalLinkAlt className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;