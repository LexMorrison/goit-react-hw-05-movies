import { Link } from 'react-router-dom';
const MovieGallery = ({ movieList, location }) => {
  return (
    <div>
      <ul>
        {movieList.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieGallery;
