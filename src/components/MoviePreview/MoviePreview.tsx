import { POSTER_URL_PREFIX } from "../../App";
import { Movie } from "../../models";
import styles from "./MoviePreview.module.css";

const MoviePreview = ({movie} : { movie: Movie }) => {
  const goToMovieDetails = () => {
    // A DEFINIR EXPERT
  };
  var note = movie.vote_average / 2.0;

  return <div className={styles.movieCard} onClick={goToMovieDetails}>
    <div className={styles.previewBackground}>
      <div className={styles.imgContainer}>
        <img className={styles.poster} src={POSTER_URL_PREFIX + movie.poster_path} alt="" crossOrigin=""/>
      </div>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{movie.title}</div>
        <div className={styles.noteContainer}>
          {[...Array(5)].map((_, index) => (
              <span className={`${styles.starItem} ${
                index < note ? styles.yellow : styles.white
              }`}>★</span>
            ))}
        </div>
      </div>

    </div>
  </div>;
};

export default MoviePreview;
