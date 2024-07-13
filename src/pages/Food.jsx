import React, { useState } from 'react';
import Footer from '../components/Footer';
import Table from '../components/Table';
import foodData from '../data/foodData';

function Page4() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(foodData);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filtered = foodData.filter((item) =>
      item.name.toLowerCase().includes(query)
    );

    setFilteredData(filtered);
  };
  const mappedListItems = (item) => <li key={item.id}>{item.name}</li>;

  return (
    <>
      <header className='bg-blue-950 text-white text-lg font-bold py-4 px-6 shadow-md'>
        <h1>Dynamic Food Search</h1>
      </header>
      <p className='font-bold p-4 bg-blue-50'>
        Quick search tool for food and its stats.
      </p>
      <div className='pr-4 pl-4 pb-3 mt-4'>
        <input
          className='w-full pl-4 p-2 border border-gray-300 rounded-xl'
          type='text'
          placeholder='Search food...'
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className='m-2'>
        <Table
          key={filteredData.id}
          colHeadA='ID'
          colHeadB='Name'
          colHeadC='Hearts'
          colHeadD='Notes'
          filteredSearch={filteredData}
        />
      </div>

      <Footer footerText='Placeholder page content is displayed here.' />
    </>
  );
}

export default Page4;
