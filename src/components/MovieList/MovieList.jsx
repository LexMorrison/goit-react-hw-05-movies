import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  MovieGallery,
  ImgPoster,
  MovieItem,
  Description,
  Linkk,
} from './MovieList.styled';
const MovieList = ({ movieList }) => {
  const location = useLocation();
  const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w500/';
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <MovieGallery>
      {movieList.map(({ id, title, name, poster_path }) => (
        <MovieItem key={id}>
          <Linkk to={`/movies/${id}`} state={{ from: location }}>
            <ImgPoster
              src={poster_path ? BASE_URL_IMG + poster_path : defaultImg}
              alt={title || name}
            />
            <Description>{title || name}</Description>
          </Linkk>
        </MovieItem>
      ))}
    </MovieGallery>
  );
};
export default MovieList;

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};
