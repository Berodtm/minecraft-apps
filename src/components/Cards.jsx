function Card(props) {
    return (
      <div className='min-w-[350px] max-w-[350px] m-5 py-8 px-8 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6'>
        <div className='text-center space-y-2 sm:text-left'>
          <div className='space-y-0.5'>
            <p className='text-lg text-black font-semibold'>
              {props.name ? props.name : 'Name Missing'}
            </p>
            <p className='text-slate-600 text-sm font-medium pt-3 pb-3'>
              {props.about}
            </p>
            <p className='text-blue-500 hover:text-blue-600 font-medium'>
                <a href={props.url} target="_blank">Find out more</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;
  