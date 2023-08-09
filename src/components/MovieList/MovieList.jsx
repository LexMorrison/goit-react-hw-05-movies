import {
  MovieGallery,
  ImgPoster,
  MovieItem,
  Description,
  Linkk,
} from './MovieList.styled';
const MovieList = ({ movieList, location, imgPoster }) => {
  return (
    <MovieGallery>
      {movieList.map(({ id, title, name, poster_path }) => (
        <MovieItem key={id}>
          <Linkk to={`/movies/${id}`} state={{ from: location }}>
            <ImgPoster src={imgPoster + poster_path} alt={title || name} />
            <Description>{title || name}</Description>
          </Linkk>
        </MovieItem>
      ))}
    </MovieGallery>
  );
};
export default MovieList;
