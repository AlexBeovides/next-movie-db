// components/NavBar.js
import styles from './NavBar.module.css'; 

function NavBar() {
  return (
    <header className={styles.navbar}>
        <h1 className={styles.logo}> TheMovieDB </h1>

        <div className={styles.icon}> 
            <div dangerouslySetInnerHTML={{ __html: '<i class="fa-solid fa-house fa-xl" style="color: #1d3c5f;"></i>' }} />
        </div>
    </header>
  );
}

export default NavBar;
