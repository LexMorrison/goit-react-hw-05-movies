import PropTypes from 'prop-types';
const SearchForm = ({ pushForm, inputValue, searchText }) => {
  return (
    <form onSubmit={pushForm}>
      <input
        type="text"
        placeholder="type something"
        name="search"
        value={searchText}
        onChange={inputValue}
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default SearchForm;

SearchForm.propTypes = {
  pushForm: PropTypes.func.isRequired,
  inputValue: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};
