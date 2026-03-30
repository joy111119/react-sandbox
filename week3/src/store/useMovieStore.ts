import { create } from 'zustand';

interface Movie {
  id: number;
  title: string;
  watched: boolean;
}

interface MovieStore {
  movies: Movie[];
  toggleWatched: (id: number) => void;
}

export const useMovieStore = create<MovieStore>((set) => ({
  movies: [
    { id: 1, title: "Inception", watched: false },
    { id: 2, title: "Interstellar", watched: true },
    { id: 3, title: "The Dark Knight", watched: false },
    { id: 4, title: "Avengers: Endgame", watched: true },
  ],


 toggleWatched: (id: number) =>
    set((state) => ({
      movies: state.movies.map((movie) => {
        if (movie.id === id) {
          return { ...movie, watched: !movie.watched };
        }
        return movie;
      }),
    })),
}));
