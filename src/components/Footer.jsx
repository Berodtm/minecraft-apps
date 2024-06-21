const Footer = (props) => {
  return (
    <footer className='bg-blue-100 p-4 shadow mt-auto'>
      <p className='text-xs'>
        {props.footerText}
        <br />
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
  );
};

export default Footer;