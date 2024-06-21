import React from 'react';
import Search from '../components/Search';
import usefulLinks from '../data/usefulLinks';
import useFilteredData from '../hooks/useFilteredData';
import FilteredList from '../components/FilteredList';
import Footer from '../components/Footer';

export default function UsefulLinksPage() {
  const { filteredData, handleSearch } = useFilteredData(usefulLinks);

  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-blue-950 text-white text-lg font-bold py-4 px-6 shadow-md'>
        <h1>Useful links from the Minecraft community</h1>
      </header>
      <section>
        <p className='font-bold p-4 bg-blue-50'>
          Valuable resources every Minecraft fan should have in their toolkit.
        </p>
        <div className='pr-4 pl-4 pb-1 mt-4'>
          <Search
            onSearch={(query) => handleSearch(query, ['name', 'about'])}
          />
        </div>
      </section>
      <main className='flex-grow flex pt-3 pb-3 justify-center'>
        <FilteredList
          data={filteredData}
          cardProps={(link) => ({
            url: link.url,
            name: link.name,
            about: link.about,
            button: `Visit ${link.name}`,
          })}
        />
      </main>
      <Footer footerText='Page created by Rob Dunn to test out the map method with a list and a reusable card component.' />
    </div>
  );
}
