import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Notiflix from 'notiflix';
import { fetchData } from 'REST API/api-service';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { Title } from './Movies.styled';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const [searchText, setSearchText] = useState('');

  let title = '';
  useEffect(() => {
    setIsLoading(true);

    const moviesData = async () => {
      try {
        const responce = await fetchData(`/search/movie`, 1, searchText);
        setMovieList(responce.data.results);
      } catch {
        setError('error');
      } finally {
        setIsLoading(false);
      }
    };
    moviesData();
  }, [searchText]);

  const handleSubmit = data => {
    if (data === '') {
      Notiflix.Notify.warning('Please, type your search query!');
      return;
    }
    setSearchText(data);
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
      {searchText && <Title>{title}</Title>}
      {movieList.length !== 0 && (
        <MovieList movieList={movieList} location={location} />
      )}
    </div>
  );
};
export default Movies;
