import usefulLinks from '../data/usefulLinks';
import Card from '../components/Cards';
import { useState } from 'react';
import Search from '../components/Search';

export default function UsefulLinksPage() {
  const [filteredUpdates, setFilteredUpdates] = useState(usefulLinks);

  const handleSearch = (query) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = usefulLinks.filter(
      (link) =>
        link.name.toLowerCase().includes(lowerCaseQuery) ||
        link.about.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredUpdates(filtered);

  };
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-blue-950 text-white text-lg font-bold py-4 px-6 shadow-md'>
        <h1>Useful links from the Minecraft community</h1>
      </header>
      <section>
      <p className='font-bold p-4 bg-blue-50'>
        Valuable resources every Minecraft fan should have in their toolkit.
      </p>
      <div className='pr-4 pl-4 pb-1 mt-4 '>
          <Search onSearch={handleSearch} />
        </div>
      </section>
      <main className='flex-grow  flex pt-3 pb-3 justify-center'>

        <div className='flex flex-wrap content-start justify-center'>
          {filteredUpdates.map((link) => (
            <Card
              url={link.url}
              name={link.name}
              key={link.id}
              about={link.about}
              button={`Visit ${link.name}`}
            />
          ))}
        </div>
      </main>
      <footer className='bg-blue-100 p-4 shadow mt-auto'>
        <p className='text-xs'>
          Page created by Rob Dunn to test out the map method with a list and a
          reusable card component. <br />
          <br />
          If you wish to see more or contact me you can visit my blog at{' '}
          <a
            title='Robs Blog'
            target='_blank'
            href='https://berodtm.github.io/robs-blog/'
          >
            https://berodtm.github.io/robs-blog/
          </a>
          .
        </p>
      </footer>
    </div>
  );
  }
