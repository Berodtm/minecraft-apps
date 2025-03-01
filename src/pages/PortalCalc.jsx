import CordInputForm from '../components/CordInputForm';
import Footer from '../components/Footer';

function PortalCalc() {
  return (
    <div className='flex flex-col min-h-screen bg-slate-300'>
      <div className='flex-grow'>
        <CordInputForm />
      </div>
      <Footer footerText='Page created by Rob Dunn to test out useState in React JS and to make something useful for my kids playing Minecraft.' footerText2="To make the experience easier on mobile, I set the state to take away the number when tapping and to reinsert it when tapping off, meaning the user does not have to delete the number and enter a new one, taking advantage of React's persistent state." />
    </div>
  );
}

export default PortalCalc;