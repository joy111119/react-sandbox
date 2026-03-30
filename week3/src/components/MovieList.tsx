import { useState } from "react";
import { useMovieStore } from "../store/useMovieStore";

const MovieList = () => {
  const movies = useMovieStore((state) => state.movies);
  const toggleWatched = useMovieStore((state) => state.toggleWatched);

  const [filterType, setFilterType] = useState<'all' | 'watched' | 'unwatched'>('all');

  // 🔹 Filtering logic
  let filteredMovies = movies;

  if (filterType === 'watched') {
    filteredMovies = movies.filter((movie) => movie.watched);
  } else if (filterType === 'unwatched') {
    filteredMovies = movies.filter((movie) => !movie.watched);
  }

  return (
    <div>
      <h2>Movie List</h2>

      {/* 🔘 Filter buttons */}
      <button onClick={() => setFilterType('all')}>All</button>
      <button onClick={() => setFilterType('watched')}>Watched</button>
      <button onClick={() => setFilterType('unwatched')}>Unwatched</button>

      {/* 🎬 Render movies */}
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie.id}>
            {movie.title} — {movie.watched ? "Watched" : "Not Watched"}

            {/* 🔁 Toggle button */}
            <button onClick={() => toggleWatched(movie.id)}>
              Toggle
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;