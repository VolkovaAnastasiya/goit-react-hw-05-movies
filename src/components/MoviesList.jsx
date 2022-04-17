import { Link, useLocation } from 'react-router-dom';
import { List, Item } from 'stiles/MovieList.styled';

export default function MoviesList({ movies }) {
  const location = useLocation();
 
  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            <h2>{movie.title}</h2>
          </Link>
        </Item>
      ))}
    </List>
  );
}
