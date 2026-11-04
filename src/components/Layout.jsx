import { useState, useEffect } from "react";
import Nav from "./Nav";
import { mockMovies } from "./mockMovies";
import { Outlet, Link } from "react-router-dom";

function Layout() {
const [movies, setMovies] = useState(mockMovies);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const timer = setTimeout(() => setLoading(false), 1000);
  return () => clearTimeout(timer);
}, []);
  return (
    <>
    <Nav setMovies={setMovies} setLoading={setLoading} />
	<Outlet context={{ movies, loading }} />
      <footer className="footer">
        <div className="footer-container">
          <Link to="/" className="footer-logo">One Movie</Link>
          <p className="footer-text">Discover your next favorite movie.</p>
          <p className="footer-copy">© 2026 One Movie. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Layout;