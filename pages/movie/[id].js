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
    <div className={styles.overallCont}>
      <div className={styles.detailContainer}>
        <div className={styles.imageContainer}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className={styles.detailImage} />
        </div>

        <div className={styles.infoContainer}>
          <h1 className={styles.header} >{movie.title} ({movie.release_date.substring(0, 4)})</h1>
          <i className={styles.content} >{movie.tagline}</i> 

          <h2 id={styles.overviewH} className={styles.header} > Overview </h2>
          <p  id={styles.overviewC}  className={styles.content} >{movie.overview}</p>
        
          <div className={styles.extraData}>
            <div className={styles.budgetCont} >
              <p className={styles.header} >Budget:</p>
              <p  className={styles.content}>{movie.budget}</p>
            </div>
            <div className={styles.revenueCont} >
              <p className={styles.header} >Revenue:</p>
              <p  className={styles.content} >{movie.revenue}</p>
            </div>
            <div className={styles.popularityCont} >
              <p className={styles.header} >Popularity:</p>
              <p  className={styles.content} >{movie.popularity}</p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default MovieDetail;
