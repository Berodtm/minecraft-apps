import React, { useState } from 'react';
import Footer from '../components/Footer';

const data = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Cookie' },
  { id: 3, name: 'Carrot' },
  { id: 4, name: 'Steak' },
];

function Page4() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(query)
    );

    setFilteredData(filtered);
  };
  const mappedListItems = (item) => <li key={item.id}>{item.name}</li>;

  return (
    <div>
      <p>Page under construction.</p>
      <input
        type='text'
        placeholder='Search food...'
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>{filteredData.map(mappedListItems)}</ul>
      <Footer footerText='Placeholder page content is displayed here.' />
    </div>
  );
}

export default Page4;
