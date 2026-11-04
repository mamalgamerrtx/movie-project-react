import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import MovieCard from "./MovieCard";

function Home() {
  const { movies, loading } = useOutletContext();
  const [sortOrder, setSortOrder] = useState("default");

  const sortedMovies = [...movies].sort((a, b) => {
    switch (sortOrder) {
      case "alpha-asc":
        return a.Title.localeCompare(b.Title);
      case "alpha-desc":
        return b.Title.localeCompare(a.Title);
      case "year-desc":
        return parseInt(b.Year, 10) - parseInt(a.Year, 10);
      case "year-asc":
        return parseInt(a.Year, 10) - parseInt(b.Year, 10);
      default:
        return 0;
    }
  });

  function renderContent() {
if (loading) {
  return Array.from({ length: 8 }).map((_, index) => (
    <div className="movie-card skeleton-card" key={index}>
      <div className="skeleton skeleton-poster"></div>
      <div className="movie-info">
        <div className="skeleton skeleton-title"></div>
        <div className="skeleton skeleton-year"></div>
      </div>
    </div>
  ));
}

    if (sortedMovies.length === 0) {
      return (
        <p style={{ color: "#f87171", gridColumn: "1 / -1" }}>
          No movies found.
        </p>
      );
    }

    return sortedMovies.map((movie) => (
      <MovieCard key={movie.imdbID} movie={movie} />
    ));
  }

  return (
    <main className="main-content">
      <div className="controls-bar">
        <div className="filter-box">
          <label htmlFor="sortSelect">Sort by:</label>
          <select
            id="sortSelect"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
          >
            <option value="default" disabled>Select sorting</option>
            <option value="alpha-asc">Alphabetical: A to Z</option>
            <option value="alpha-desc">Alphabetical: Z to A</option>
            <option value="year-desc">Newest to Oldest</option>
            <option value="year-asc">Oldest to Newest</option>
          </select>
        </div>
      </div>

      <section id="movieContainer">{renderContent()}</section>
    </main>
  );
}

export default Home;