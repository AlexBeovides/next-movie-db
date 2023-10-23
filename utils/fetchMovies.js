import axios from 'axios';

const fetchMovies = async () => {
  try {
    const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: '3c6edbb90c6f1231acbfa7eb66477081',        // DELETE THIS SHIT
      }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

export default fetchMovies;
