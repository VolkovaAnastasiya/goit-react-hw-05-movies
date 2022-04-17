import { Link, useLocation } from 'react-router-dom';

export default function MoviesList({ movies }) {
  const location = useLocation();
  console.log('location', location)
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
