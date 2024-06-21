import React from 'react';
import Search from '../components/Search';
import minecraftUpdatesData from '../data/minecraftUpdatesData';
import useFilteredData from '../hooks/useFilteredData';
import FilteredList from '../components/FilteredList';
import Footer from '../components/Footer';

export default function MainUpdates() {
  const { filteredData, handleSearch } = useFilteredData(minecraftUpdatesData);

  return (
    <>
      <div className='flex flex-col min-h-screen'>
        <header className='bg-blue-950 text-white text-lg font-bold py-4 px-6 shadow-md'>
          <h1>MineCraft Update History</h1>
        </header>
        <p className='font-bold p-4 bg-blue-50'>
          A brief history lesson on all the major Minecraft updates.
        </p>
        <div className='pr-4 pl-4 pb-1 mt-4'>
          <Search
            onSearch={(query) =>
              handleSearch(query, ['name', 'version', 'year', 'features'])
            }
          />
        </div>
        <main className='flex-grow flex pt-1 pb-3 justify-center'>
          <FilteredList
            data={filteredData}
            cardProps={(item) => ({
              url: item.url,
              name: `${item.version} ${item.name} ${item.year}`,
              list: item.features,
              minWidth: '350px',
              maxWidth: '500px',
              button: `Read Version ${item.version} update notes`,
            })}
          />
        </main>
      </div>
      <Footer
        footerText='Page created by Rob Dunn to test out the map method with a list and a
          reusable card component. Also managed to pass styles by props and have
          a nested map method inside the map method for list items.'
      />
    </>
  );
}
