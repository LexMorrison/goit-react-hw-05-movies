import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchData } from 'REST API/api-service';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
const Home = ({ imgPost }) => {
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetchData('/trending/all/day', 1).then(responce => {
      if (responce.status !== 200) {
        throw new Error('Something went wrong!');
      } else {
        setMovieList(responce.data.results);
        setIsLoading(false);
      }
    });
  }, []);
  return (
    <div>
      {isLoading && <Loader />}
      {movieList.length !== 0 && (
        <MovieList
          movieList={movieList}
          location={location}
          imgPoster={imgPost}
        />
      )}
    </div>
  );
};

export default Home;

Home.propTypes = {
  imgPost: PropTypes.string.isRequired,
};
