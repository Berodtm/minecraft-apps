function Card(props) {
  const { name, about, list, url, minWidth = '350px', maxWidth = '350px', button } = props;
  
  return (
    <div
      className='m-5 py-8 px-8 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'
      style={{ minWidth, maxWidth }}
    >
      <div className='text-center space-y-2 sm:text-left'>
        <div className='space-y-0.5'>
          <p className='text-lg text-black font-semibold'>
            {name ? name : 'Name Missing'}
          </p>
          <p className='text-slate-600 text-sm font-medium  pb-2'>
            {about}
          </p>
          {list && list.length > 0 && (
            <ul className='list-disc pl-3 text-left'>
              {list.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
          <p className='text-blue-500 hover:text-blue-600 font-medium'>
            <a className="mt-2" href={url} target='_blank' rel='noopener noreferrer'>
              {button ? button : 'Find out more'}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;