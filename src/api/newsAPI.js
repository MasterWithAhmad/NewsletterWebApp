// src/api/newsAPI.js
import axios from 'axios';

const API_KEY = 'YOUR API KEY HERE'; // Replace with your NewsAPI key
const BASE_URL = 'https://newsapi.org/v2/top-headlines?country=us';

export const getNews = async (page = 1, pageSize = 6) => {
  try {
    const response = await axios.get(`${BASE_URL}&apiKey=${API_KEY}&page=${page}&pageSize=${pageSize}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching news');
  }
};
