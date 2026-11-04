import { Link } from "react-router-dom";

const noMoviePoster = "https://moviesthisday.com/static/placeholder-poster.png"; 
// this is for when there is no poster found on the database 

function MovieCard({ movie }) {
  const poster =
    movie.Poster && movie.Poster !== "N/A" ? movie.Poster : noMoviePoster;

  const cardContent = (
    <>
      <div className="poster-wrapper">
        <img
          src={poster}
          alt={movie.Title}
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = noMoviePoster;
          }}
        />
      </div>
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        {movie.Year && <p>Year: {movie.Year}</p>}
      </div>
    </>
  );

  return (
    <Link to={`/movie/${movie.imdbID}`} className="movie-card">
      {cardContent}
    </Link>
  );
}

export default MovieCard;