import { Link } from 'react-router-dom';
const MovieList = ({ movieList, location, imgPoster }) => {
  return (
    <div>
      <ul>
        {movieList.map(({ id, title, name, poster_path }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img src={imgPoster + poster_path} alt={title || name} />
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieList;
