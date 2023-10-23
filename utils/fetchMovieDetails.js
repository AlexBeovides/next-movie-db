// utils/fetchMovieDetails.js
const API_KEY = '3c6edbb90c6f1231acbfa7eb66477081';  // Replace with your TMDB API Key

export default async function fetchMovieDetails(movieId) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
  const data = await res.json();

  return data;
}
