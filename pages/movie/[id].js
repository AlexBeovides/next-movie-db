import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import fetchMovieDetails from '@/utils/fetchMovieDetails';
import styles from '@/styles/MovieDetail.module.css'; // Assuming you have styles defined

function MovieDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (id) {
      (async () => {
        const movieData = await fetchMovieDetails(id);
        setMovie(movieData);
      })();
    }
  }, [id]);

  if (!movie) return <p>Loading...</p>; // Display a loading message or spinner until the movie data is fetched

  return (
    <div className={styles.detailContainer}>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default MovieDetail;
