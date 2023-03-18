import React, { useState } from 'react';

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
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleQueryChange} />
        <button type="submit" className="button">
          Search
        </button>
      </form>
    </div>
  );
};
