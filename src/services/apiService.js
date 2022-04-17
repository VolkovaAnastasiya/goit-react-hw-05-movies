import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const api_key = '342eb2d403c7b59809d73aa477ec348f';

export const getTranding = async () => {
  const {
    data: { results },
  } = await axios.get(`/trending/movie/day?page=1&api_key=${api_key}`);

  return results;
};

export const getSearchMovie = async query => {
  const {
    data: { results },
  } = await axios.get(`/search/movie?api_key=${api_key}&query=${query}`);

  return results;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(`/movie/${id}?api_key=${api_key}`);

  return data;
};

export const getReview = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?api_key=${api_key}`);
  return data;
};

export const getCast = async id => {
  const { data } = await axios.get(
    `/movie/${id}/credits?api_key=${api_key}&language=en-US`
  );
  return data;
};
