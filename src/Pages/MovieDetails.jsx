import { useEffect, useState, Suspense, useRef } from 'react';

import { useLocation, useParams, Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { fetchData } from 'REST API/api-service';
import { Button } from './MovieDetails.styled';
import {
  Container,
  FilmImg,
  PositionDiv,
  TextPos,
  OverviewDescr,
  ReviewLink,
  CastLink,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  //return to back or home page next line
  const backButton = useRef(location.state?.from ?? '/');
  useEffect(() => {
    setIsLoading(true);
    const movieItems = async () => {
      try {
        const responce = await fetchData(`/movie/${movieId}`, 0);
        setMovie(responce.data);
      } catch {
        setError('error');
      } finally {
        setIsLoading(false);
      }
    };
    movieItems();
  }, [movieId]);
  const {
    genres,
    original_title,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movie;
  const imgPath = poster_path ? BASE_URL_IMG + poster_path : defaultImg;
  return (
    <Container>
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong!</p>}
      <Button to={backButton.current}>go back</Button>
      <PositionDiv>
        <FilmImg src={imgPath} alt={original_title} />
        <TextPos>
          <h2>
            {original_title} ({release_date})
          </h2>
          <p>Rating: {vote_average} points.</p>
          <h3>Overview:</h3>
          <OverviewDescr>{overview}</OverviewDescr>
          <p>Genres: {genres && genres.map(({ name }) => name).join(', ')}</p>
        </TextPos>
      </PositionDiv>
      <div>
        <h2>Additional information:</h2>
        <ul>
          <li>
            <CastLink to="cast">Cast</CastLink>
          </li>
          <li>
            <ReviewLink to="reviews">Reviews</ReviewLink>
          </li>
        </ul>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
