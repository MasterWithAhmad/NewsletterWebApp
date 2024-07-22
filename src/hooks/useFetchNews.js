// src/hooks/useFetchNews.js
import { useState, useEffect } from 'react';
import { getNews } from '../api/newsAPI';

/**
 * A custom React hook that fetches news articles from an API.
 *
 * @param {number} [page=1] - The page number of the news articles to fetch.
 * @returns {object} - An object containing the fetched news articles, the total number of results, any error that occurred, and the loading state.
 * @property {array} articles - The array of news articles fetched from the API.
 * @property {number} totalResults - The total number of news articles available.
 * @property {string|null} error - The error message if an error occurred during the fetch.
 * @property {boolean} loading - A boolean indicating whether the data is currently being fetched.
 */
export const useFetchNews = (page = 1) => {
  const [articles, setArticles] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await getNews(page);
        setArticles(result.articles);
        setTotalResults(result.totalResults);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);

  return { articles, totalResults, error, loading };
};
