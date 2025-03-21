import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Portal Calculator', href: '/PortalCalc' },
  { name: 'Food', href: '/Food' },
  { name: 'Useful Links', href: '/UsefulLinksPage' },
  { name: 'Main Updates', href: '/MainUpdates' },

];

export default function Header(props) {
  return (
    <>
      <Disclosure as='nav' className='bg-gray-800'>
        {({ open, close }) => (
          <>
            <div className=' px-2 sm:px-6 lg:px-8'>
              <div className='relative flex h-14 items-center justify-between'>
                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                  {/* Mobile menu button*/}
                  <DisclosureButton className='relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                    <span className='absolute -inset-0.5' />
                    <span className='sr-only'>Open main menu</span>
                    {open ? (
                      <XMarkIcon className='block h-6 w-6' aria-hidden='true' />
                    ) : (
                      <Bars3Icon className='block h-6 w-6' aria-hidden='true' />
                    )}
                  </DisclosureButton>
                </div>
                <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                  <div className='hidden sm:ml-6 sm:block'>
                    <div className='flex space-x-4'>
                      {navigation.map((item) => (
                        <NavLink
                          key={item.name}
                          to={item.href}
                          className={({ isActive }) => {
                            return (
                              'rounded-md px-3 py-2 text-sm font-medium no-underline' +
                              (isActive
                                ? ' bg-gray-900 text-white'
                                : ' text-gray-300 hover:bg-gray-700 hover:text-white')
                            );
                          }}
                        >
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  <p className='text-gray-300 font-bold'>Rob's Minecraft App</p>
                </div>
              </div>
            </div>
            
            <DisclosurePanel className='sm:hidden'>
              <div className='space-y-1 px-2 pb-3 pt-2'>
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    onClick={() => close()} 
                    className={({ isActive }) => {
                      return (
                        'block px-3 py-2 rounded-md text-base font-medium no-underline' +
                        (isActive
                          ? ' bg-gray-900 text-white'
                          : ' text-gray-300 hover:bg-gray-700 hover:text-white')
                      );
                    }}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
      <div className='bg-slate-300 '>
        <div>
          {/* max-w-7xl mx-auto min-h-screen p-2 commented this out to test formatting*/}
          {props.children}
        </div>
      </div>
    </>
  );
}
