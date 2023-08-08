import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { fetchData } from 'REST API/api-service';
import MovieList from 'components/MovieList/MovieList';
const Home = ({ imgPost }) => {
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();

  useEffect(() => {
    fetchData('/trending/all/day', 1).then(responce => {
      if (responce.status !== 200) {
        throw new Error('Something went wrong!');
      } else {
        setMovieList(responce.data.results);
      }
    });
  }, []);
  return (
    <div>
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