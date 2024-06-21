import { useState } from 'react';
function Search({ onSearch }) {
  const [search, setSearch] = useState('');
  function handleSearch(e) {
    setSearch(e.target.value);
    onSearch(e.target.value);
    console.log(e.target.value);
  }
  return (
    <>
      <input
        type='text'
        placeholder='search...'
        value={search}
        onChange={handleSearch}
        className='w-full pl-4 p-2 border border-gray-300 rounded-xl'
      />
      
    </>
  );
}
export default Search;
