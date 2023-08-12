import PropTypes from 'prop-types';
import { useState } from 'react';
import { SearchButton, SearchFormSt, InputTxt } from './SearchForm.styled';
import { MdScreenSearchDesktop } from 'react-icons/md';
const SearchForm = ({ pushForm }) => {
  const [input, setInput] = useState('');
  const inputChange = evt => {
    setInput(evt.target.value);
  };
  const submitForm = evt => {
    evt.preventDefault();
    pushForm(input.trim());
    setInput('');
  };

  return (
    <SearchFormSt onSubmit={submitForm}>
      <InputTxt
        type="text"
        placeholder="type something"
        name="search"
        value={input}
        onChange={inputChange}
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
};
