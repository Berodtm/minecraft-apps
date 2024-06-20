import Card from '../components/Cards';
import minecraftUpdatesData from '../data/minecraftUpdatesData';
export default function MainUpdates() {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='bg-blue-950 text-white text-lg font-bold py-4 px-6 shadow-md'>
        <h1>MineCraft Update History</h1>
      </header>
      <p className='font-bold p-4 bg-blue-50'>
        A brief history lesson on all the major Minecraft updates. 
      </p>
      <main className='flex-grow  flex pt-3 pb-3 justify-center'>
        <div className='flex flex-wrap content-start justify-center'>
          {minecraftUpdatesData.map(({ id, url, version, name, year = '' , features }) => (
            <Card
              url={url}
              name={`${version} ${name} ${year.toString()}`}
              key={id}
              list={features}
              minWidth='350px' 
              maxWidth='500px' 
              button={`Read Version ${version} update notes`}
            />
          ))}
        </div>
      </main>
      <footer className='bg-blue-100 p-4 shadow mt-auto'>
        <p className='text-xs'>
          Page created by Rob Dunn to test out the map method with a list and a
          reusable card component. Also managed to pass styles by props and have a nested map method inside the map method for list items. <br />
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
