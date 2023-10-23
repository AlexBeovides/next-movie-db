// pages/movie/[id].js
import { useRouter } from 'next/router';
import styles from '@/styles/MovieDetail.module.css'

function MovieDetail() {
  const router = useRouter();
  const { id } = router.query;

  // Fetch movie details based on the id, or handle it in useEffect
  // Render movie details

  return (
    <div className={styles.detailContainer}>
      {/* Render movie details */}
      Movie ID: {id}
      <h1>quimbaaaaaaaaa</h1>

    </div>
  );
}

export default MovieDetail;
