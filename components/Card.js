// components/Card.js
import styles from './Card.module.css';  // Assuming you're using CSS Modules

function Card({ movie }) {
  return (
    <div className={styles.card}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={`${movie.title} Poster`}  className={styles.cardImage}/>
      
      <div className='styles.cardText'> 
        <h4 className={styles.cardTitle}>{movie.title}</h4>
        <p className={styles.cardDescription}>{movie.overview}</p>
      </div>
    </div>
  );
}

export default Card;
