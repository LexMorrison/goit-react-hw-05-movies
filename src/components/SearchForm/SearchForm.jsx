import PropTypes from 'prop-types';
import { SearchButton, SearchFormSt, InputTxt } from './SearchForm.styled';
import { MdScreenSearchDesktop } from 'react-icons/md';
const SearchForm = ({ pushForm, inputValue, searchText }) => {
  return (
    <SearchFormSt onSubmit={pushForm}>
      <InputTxt
        type="text"
        placeholder="type something"
        name="search"
        value={searchText}
        onChange={inputValue}
      />
      <SearchButton type="submit">
        Search
        <MdScreenSearchDesktop size="2rem" />
      </SearchButton>
    </SearchFormSt>
  );
};
export default SearchForm;

SearchForm.propTypes = {
  pushForm: PropTypes.func.isRequired,
  inputValue: PropTypes.func.isRequired,
  searchText: PropTypes.string.isRequired,
};
