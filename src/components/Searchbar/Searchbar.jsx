import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SearchbarStyled } from './SearchbarStyled';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleQueryChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      return alert('Please enter search parameter');
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchbarStyled>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleQueryChange} />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </SearchbarStyled>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
