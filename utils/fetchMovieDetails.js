// utils/fetchMovieDetails.js
const API_KEY = 'YOUR API KEY';  // Replace with your TMDB API Key

export default async function fetchMovieDetails(movieId) {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`);
  const data = await res.json();

  return data;
}
