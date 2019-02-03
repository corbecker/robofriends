import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
  return (
    <div>
    <input 
      aria-label='Search Robots'
      className=""
      type="search" 
      placeholder="search robots" 
      onChange={searchChange}
    />
    </div>
  );
}
export default SearchBox;