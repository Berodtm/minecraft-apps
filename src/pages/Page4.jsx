import React, { useState } from 'react';

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

    const filtered = data.filter(item => 
      item.name.toLowerCase().includes(query)
    );

    setFilteredData(filtered);
  };

  return (
    <div>
        <p>Placeholder Page - testing</p>
      <input
        type="text"
        placeholder="Search food..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <ul>
        {filteredData.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Page4;