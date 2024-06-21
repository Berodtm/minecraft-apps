import React from 'react';
import Card from './Cards';

const FilteredList = ({ data, cardProps }) => {
  return (
    <div className='flex flex-wrap content-start justify-center'>
      {data.map((item) => (
        <Card key={item.id} {...cardProps(item)} />
      ))}
    </div>
  );
};

export default FilteredList;