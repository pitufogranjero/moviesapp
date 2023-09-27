import './SearchBar.css'
import React, { useState } from 'react';

export function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  // console.log('SearchBar -> ' + query)
  return (
      <input type="text" value={query} onChange={handleInputChange} placeholder="🔍 Search a Movie or a TV Show..."/>
  );
}


