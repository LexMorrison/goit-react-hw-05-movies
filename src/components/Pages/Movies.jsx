import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { fetchData } from 'REST API/api-service';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

const Movies = ({ imgPost }) => {
  const [movieList, setMovieList] = useState([]);
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchText, setSearchText] = useState(
    searchParams.get('search') ?? ''
  );
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
    evt.preventDefaults();

    let localValue = searchParams.get('search');

    setSearchParams({ search: localValue.trim() });
    setSearchText(localValue.trim());
    if (!searchText) {
      Notiflix.Notify.info(
        'The search bar cannot be empty. Please type something!'
      );
    }
  };

  const inputChange = ({ target: { value } }) => {
    setSearchParams({ search: value });
  };
  return (
    <div>
      {isLoading && <Loader />}
      <SearchForm
        pushForm={handleSubmit}
        inputValue={inputChange}
        searchText={searchParams.get('search') ?? ''}
      />
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
