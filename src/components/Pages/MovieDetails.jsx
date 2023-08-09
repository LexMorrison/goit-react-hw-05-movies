import { useEffect, useState, Suspense } from 'react';

import { useLocation, useParams, Outlet } from 'react-router-dom';
import { fetchData } from 'REST API/api-service';
import { Button } from './MovieDetails.styled';
import {
  Container,
  FilmImg,
  PositionDiv,
  TextPos,
  OverviewDescr,
} from './MovieDetails.styled';

const MovieDetails = ({ imgPost }) => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  //return to back or home page next line
  const backButton = location.state?.from ?? '/';
  useEffect(() => {
    fetchData(`/movie/${movieId}`, 0).then(responce => {
      if (responce.status !== 200) {
        throw new Error('Something went wrong!');
      } else {
        setMovie(responce.data);
      }
    });
  }, [movieId]);
  const {
    genres,
    original_title,
    overview,
    poster_path,
    release_date,
    vote_average,
  } = movie;
  const imgPath = imgPost + poster_path;
  return (
    <Container>
      <Button to={backButton}>go back</Button>
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
    </Container>
  );
};

export default MovieDetails;
