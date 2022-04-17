import { getTranding } from 'services/apiService';
import MoviesList from 'components/MoviesList';
import { useState, useEffect } from 'react';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTranding().then(data => setMovies(data));
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <MoviesList movies={movies} />
    </div>
  );
}
