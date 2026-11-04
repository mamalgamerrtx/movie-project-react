import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../UI/Navbar.jsx'
import { mockMovies } from "./mockMovies";
const apiKey = "dea51ad";
function goHome() {
  setQuery("");               // clear the search bar
  setMovies(mockMovies);      // bring back the featured movies
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function Nav({ setMovies, setLoading }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

async function search(event) {
  event.preventDefault(); // don't reload page 
  if (!query.trim()) return; // this stops empty searches 

  navigate("/"); // go to home page from where you are 
  setLoading(true); // loading turns true before the fetching 

  const response = await fetch(
    `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`
  );
  const data = await response.json();
  
  await new Promise((resolve) => setTimeout(resolve, 1000)); // keep spinner visible 1 second

  setMovies(data.Response === "True" ? data.Search : []); 
  // Search is a key OMDb chose. So data.Search means “give me the array stored under Search.” 
  setLoading(false);
}

  return (
    <header className="hero-section">
      <div className="overlay"></div>
		<Navbar goHome={goHome} />
      <div className="hero-content">
        <h1 className="hero-title">Browse your favorite movies</h1>

        <form className="search-bar" onSubmit={search}>
          <input
            id="searchInput"
            type="text"
            placeholder="Search by Title, Keyword..."
            autoComplete="off"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          <button type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
    </header>
  );
}

export default Nav;