# One Movie

A movie search app built with React and React Router. Browse a featured list of movies, search the OMDb database by title, sort the results, and open any movie to see its full details.

## Features

- **Search** movies and series by title using the OMDb API
- **Sort** results alphabetically (A–Z, Z–A) or by year (newest or oldest first)
- **Details page** for every movie with the poster, rating, plot, genre, director, actors and release date
- **Skeleton loading** cards while results load
- **Poster fallback** image when a movie has no poster or a broken poster link
- **Responsive layout** for desktop, tablet and mobile

## Built With

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/)
- [Vite](https://vitejs.dev/)
- [OMDb API](https://www.omdbapi.com/)
- [Font Awesome](https://fontawesome.com/) icons

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/mamalgamerrtx/movie-project-react.git
   cd movie-project-react
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open the URL shown in the terminal (usually `http://localhost:5173`).

## Project Structure

```
src/
├── App.jsx                 # Starts React and maps the routes
├── style.css               # All app styles
├── UI/
│   └── Navbar.jsx          # Logo and navigation links
└── components/
    ├── Layout.jsx          # The frame every page lives in (nav, page, footer)
    ├── Nav.jsx             # Search bar and fetching search results
    ├── Home.jsx            # Sorting and showing the movie grid
    ├── MovieCard.jsx       # One movie card
    ├── MovieDetails.jsx    # The full details page for one movie
    └── mockMovies.js       # Featured movies shown on first load
```

## How It Works

- **Search** uses the OMDb `s=` endpoint, which returns a list of matching movies with their `imdbID`.
- **Clicking a card** opens `/movie/:id`, and the details page uses the OMDb `i=` endpoint to load everything about that one movie.
- **Featured movies** on the home page come from local mock data, so no API requests are used on the first load.

## Routes

| Path         | Page                          |
| ------------ | ----------------------------- |
| `/`          | Home: featured movies and search results |
| `/movie/:id` | Movie details                 |
