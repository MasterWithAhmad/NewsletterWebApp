// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

import NewsletterForm from '../components/NewsletterForm';
import { FaHeart, FaThumbsUp } from 'react-icons/fa';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Loader from '../components/Loader';

const accessKey = 'ly0ivLxK26X92WQzgPj46o3ASB8J7Oz7LhUiVfa7k90';

const MySwal = withReactContent(Swal);

function Home() {
  const [featuredArticles, setFeaturedArticles] = useState([]);
  const [heroImageUrl, setHeroImageUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedArticles = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: {
            query: 'nature',
            count: 3,
            client_id: accessKey,
          }
        });
        const data = response.data;
        const articles = data.map(item => ({
          title: item.alt_description,
          description: item.description || 'No description available',
          urlToImage: item.urls.regular,
          source: { name: item.user.name || 'Unknown' }
        }));
        setFeaturedArticles(articles);
      } catch (error) {
        console.error('Error fetching featured articles:', error);
      } finally {
        setLoading(false);
      }
    };

    const fetchHeroImage = async () => {
      try {
        const response = await axios.get('https://api.unsplash.com/photos/random', {
          params: {
            query: 'hero',
            client_id: accessKey,
          }
        });
        setHeroImageUrl(response.data.urls.regular);
      } catch (error) {
        console.error('Error fetching hero image:', error);
      }
    };

    fetchFeaturedArticles();
    fetchHeroImage();
  }, []);

  const handleLike = () => {
    MySwal.fire({
      icon: 'success',
      title: 'You liked this picture!',
      showConfirmButton: false,
      timer: 1500
    });
  };

  const handleLove = () => {
    MySwal.fire({
      icon: 'success',
      title: 'You loved this picture!',
      showConfirmButton: false,
      timer: 1500
    });
  };

  return (
    <div className="p-4">
      {loading ? (
        <Loader />
      ) : (
        <>
          <section className="mb-8">
            <div className="flex items-center justify-center mb-6">
              {heroImageUrl && (
                <img
                  src={heroImageUrl}
                  alt="Hero"
                  className="rounded-lg shadow-lg w-full sm:max-w-lg object-cover transition-transform duration-300 hover:scale-105"
                />
              )}
            </div>
            <h1 className="text-3xl font-bold mb-4 text-center">Welcome to Our Newsletter</h1>
            <p className="mb-4 text-center">
              Stay informed with the latest news and updates delivered straight to your inbox.
              We cover a wide range of topics including technology, business, health, and more.
            </p>
            <NewsletterForm />
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Featured Stories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredArticles.map((article, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2">{article.title}</h3>
                    <p className="text-gray-600 mb-2">{article.source.name}</p>
                    <p className="text-gray-500 mb-2">{article.description}</p>
                    <div className="flex justify-between">
                      <button
                        className="text-blue-500 hover:text-blue-700 transition-colors duration-200 flex items-center"
                        onClick={handleLike}
                      >
                        <FaThumbsUp className="mr-1" /> Like
                      </button>
                      <button
                        className="text-red-500 hover:text-red-700 transition-colors duration-200 flex items-center"
                        onClick={handleLove}
                      >
                        <FaHeart className="mr-1" /> Love
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default Home;
