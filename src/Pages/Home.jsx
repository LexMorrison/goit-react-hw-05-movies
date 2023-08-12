import { useEffect, useState } from 'react';

import { fetchData } from 'REST API/api-service';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
const Home = () => {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const getMovies = async () => {
      try {
        const responce = await fetchData('/trending/all/day', 1);
        setMovieList(responce.data.results);
      } catch {
        setError('error');
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, []);
  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong!</p>}
      {movieList.length > 0 && <MovieList movieList={movieList} />}
    </div>
  );
};

export default Home;
