import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { fetchData } from 'REST API/api-service';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';
import { Title } from './Movies.styled';

const Movies = ({ imgPost }) => {
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(
    searchParams.get('search') ?? ''
  );
  let title = '';
  useEffect(() => {
    setIsLoading(true);
    fetchData(`/search/movie`, 1, searchText).then(responce => {
      if (responce.status !== 200) {
        throw new Error('Something went wrong!');
      } else {
        setMovieList(responce.data.results);
        setIsLoading(false);
      }
    });
  }, [searchText]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const searchValue = evt.target[0].value.trim();
    if (!searchValue) {
      Notiflix.Notify.warning('Please, type something!');
    }

    let localValue = searchParams.get('search');

    setSearchParams({ search: localValue.trim() });
    setSearchText(localValue.trim());
  };

  const inputChange = ({ target: { value } }) => {
    setSearchParams({ search: value });
  };
  if (movieList.length === 0) {
    title = 'There isnt anything';
  } else {
    title = 'Movie list:';
  }

  return (
    <div>
      {isLoading && <Loader />}
      <SearchForm
        pushForm={handleSubmit}
        inputValue={inputChange}
        searchText={searchParams.get('search') ?? ''}
      />
      {searchText && <Title>{title}</Title>}
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
export default Movies;

Movies.propTypes = {
  imgPost: PropTypes.string.isRequired,
};
