// src/hooks/useFetchNews.js
import { useState, useEffect } from 'react';
import { getNews } from '../api/newsAPI';

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
