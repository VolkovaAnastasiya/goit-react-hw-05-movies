import { getMovieDetails } from 'services/apiService';
import { useState, useEffect } from 'react';
import {
  useParams,
  useNavigate,
  Outlet,

  // useLocation,
} from 'react-router-dom';
import { Box, Wrap, Btn, Link, P } from 'stiles/MovieDetailsPage.styled';

export default function MovieDetalisPage() {
  const params = useParams();
  // const location = useLocation();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  const onBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    getMovieDetails(params.id).then(movie => setMovie(movie));
  }, [params.id]);

  return (
    <>
      <Btn type="button" onClick={onBack}>
        Go back
      </Btn>
      <Wrap>
        {movie && (
          <>
            <Box>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w300/${movie.poster_path}`
                    : `https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg`
                }
                alt={movie.original_title}
              />
            </Box>
            <Box>
              <h2>{movie.original_title}</h2>
              <P>{`Rating ${movie.vote_average}`}</P>
              <h3>Owerview:</h3>
              <P>{movie.overview}</P>

              <Box>
                <strong>Ganres: </strong>
                {movie.genres.map(({ id, name }) => (
                  <P key={id}>{name}</P>
                ))}
              </Box>
            </Box>
          </>
        )}
      </Wrap>
      <hr />
      <h2>Additional information</h2>
      <Link to="cast">Cast</Link>

      <Link to="reviews">Rewiev</Link>
      <Outlet />
    </>
  );
}

// state={{ from: location }}
