import CordInputForm from '../components/CordInputForm';

function PortalCalc() {
  return (
    <div className='flex flex-col min-h-screen bg-slate-300'>
      <div className='flex-grow'>
        <CordInputForm />
      </div>
      <div className='bg-blue-100 overflow-auto p-4 shadow'>
        <p className='text-xs'>
          Page created by Rob Dunn to test out useState in React JS and to make something useful for my kids playing Minecraft. <br /><br />To make the experience easier on mobile I set the state to take away the number when tapping and to reinsert it when tapping off meaning the user does not have to delete the number and enter a new one taking advantage of Reacts persistent state. If you wish to see more or contact me you can visit my blog at <a title='Robs Blog' target='_blank' href='https://berodtm.github.io/robs-blog/'>https://berodtm.github.io/robs-blog/</a>.
        </p>
      </div>
    </div>
  );
}

export default PortalCalc;