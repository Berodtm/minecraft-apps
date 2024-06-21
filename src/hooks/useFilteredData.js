import { useState } from 'react';

export default function useFilteredData(initialData) {
  const [filteredData, setFilteredData] = useState(initialData);

  const handleSearch = (query, fields) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = initialData.filter((item) =>
      fields.some((field) => {
        if (Array.isArray(item[field])) {
          return item[field].some((subItem) =>
            subItem.toString().toLowerCase().includes(lowerCaseQuery)
          );
        }
        return item[field].toString().toLowerCase().includes(lowerCaseQuery);
      })
    );
    setFilteredData(filtered);
  };

  return { filteredData, handleSearch };
}
