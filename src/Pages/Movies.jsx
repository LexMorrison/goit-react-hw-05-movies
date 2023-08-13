import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { fetchData } from 'REST API/api-service';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { Title } from './Movies.styled';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams('');
  const query = searchParams.get('query');
  let title = '';
  useEffect(() => {
    setIsLoading(true);

    const moviesData = async () => {
      try {
        const responce = await fetchData(`/search/movie`, 1, query);
        setMovieList(responce.data.results);
      } catch {
        setError('error');
      } finally {
        setIsLoading(false);
      }
    };
    moviesData();
  }, [query, searchParams]);

  const handleSubmit = data => {
    if (data === '') {
      Notiflix.Notify.warning('Please, type your search query!');
      return;
    }
    setSearchParams({ query: data });
  };

  if (movieList.length === 0) {
    title = 'There isnt anything';
  } else {
    title = 'Movie list:';
  }

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>Oops, something went wrong!</p>}
      <SearchForm pushForm={handleSubmit} />
      {query && <Title>{title}</Title>}
      {movieList.length !== 0 && <MovieList movieList={movieList} />}
    </div>
  );
};
export default Movies;
