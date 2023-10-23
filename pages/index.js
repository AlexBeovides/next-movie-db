import React, { useEffect, useState } from 'react';
import fetchMovies from '../utils/fetchMovies';
import Card from '@/components/Card';

const IndexPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const movieData = await fetchMovies();
      setMovies(movieData);
      console.log(movieData)
    };
    getMovies();
  }, []);

  return (
    <div className="cardsContainer">
    {movies.map((movie) => (
      <Card key={movie.id} movie={movie} />
    ))}
  </div>
  );
};

export default IndexPage;
