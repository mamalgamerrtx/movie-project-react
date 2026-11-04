import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const apiKey = "dea51ad";
const noMoviePoster = "https://moviesthisday.com/static/placeholder-poster.png";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&plot=full&apikey=${apiKey}`
      );
      const data = await response.json();
      setMovie(data.Response === "True" ? data : null);
      setLoading(false);
    }

    fetchDetails(); // calls the function here 
  }, [id]);

  function renderContent() {
    if (loading) {
      return (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      );
    }

    if (!movie) {
      return <p className="details-error">Couldn't load this movie.</p>;
    }

    const poster =
      movie.Poster && movie.Poster !== "N/A" ? movie.Poster : noMoviePoster;

    return (
      <div className="details-card">
	<img
	src={poster}
	alt={movie.Title}
	className="details-poster"
	onError={(event) => {
	event.currentTarget.onerror = null;
    event.currentTarget.src = noMoviePoster;
  }}
/>

        <div className="details-info">
          <h1>{movie.Title}</h1>
          <p className="details-meta">
            {movie.Year} · {movie.Rated} · {movie.Runtime}
          </p>

          {movie.imdbRating && movie.imdbRating !== "N/A" && (
            <span className="rating-badge">
              <i className="fa-solid fa-star"></i> {movie.imdbRating}/10
            </span>
          )}

          <p className="details-plot">{movie.Plot}</p>

          <ul className="details-list">
            <li><strong>Genre:</strong> {movie.Genre}</li>
            <li><strong>Director:</strong> {movie.Director}</li>
            <li><strong>Actors:</strong> {movie.Actors}</li>
            <li><strong>Released:</strong> {movie.Released}</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <main className="main-content">
      <Link to="/" className="back-link">
        <i className="fa-solid fa-arrow-left"></i> Back to movies
      </Link>
      {renderContent()}
    </main>
  );
}

export default MovieDetails;