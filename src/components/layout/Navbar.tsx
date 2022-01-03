import { guestMenuItems } from '@/data/menuItems';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { NavLink } from './navbarWidgets/NavLink';

interface Props {}

export const Navbar = (props: Props) => {
  return (
    <header className='bg-gray-200'>
      {' '}
      <div className='max-w-7xl mx-auto px-2 sm:px-2'>
        <div className='flex flex-row items-end justify-between py-6 md:justify-start md:space-x-0'>
          <LeftGroup />
          <MiddleGroup />
          <RightGroup />
        </div>
      </div>
    </header>
  );
};

const LeftGroup = () => {
  return (
    <div className='flex justify-start lg:flex-1 lg:w-0 xl:w-20'>
      <Link href='/'>
        <a className='flex items-center'>
          <img
            className='h-20'
            src={'/assets/img/logo_transparent.png'}
            alt='logo'
          />
          <span className='ml-2 md:hidden'>RC Shopping</span>
        </a>
      </Link>
    </div>
  );
};

const MiddleGroup = () => {
  return (
    <div className='flex flex-row gap-6'>
      {guestMenuItems.map((e) => (
        <NavLink menuItem={e} />
      ))}
    </div>
  );
};

const RightGroup = () => {
  return (
    <div className='hidden items-center justify-end space-x-2 md:flex md:flex-1 lg:w-0'>
      <Link href={'/api/auth/login'}>
        <a className='font-medium mx-2 text-base text-gray-700 whitespace-nowrap hover:text-black'>
          Sign In
        </a>
      </Link>

      <Link href={'/api/auth/login'}>
        <a className='bg-indigo-600 border border-transparent font-medium px-4 py-2 rounded-md shadow-sm text-base text-white whitespace-nowrap md:px-2 hover:bg-indigo-700'>
          Sign up
        </a>
      </Link>
      <Link href={'/cart'}>
        <a className='inline-flex items-center justify-center p-2 rounded-md shadow-sm whitespace-nowrap hover:bg-gray-300'>
          <FontAwesomeIcon
            icon={faShoppingCart}
            className='flex-shrink-0 h-6 w-6'
            aria-hidden='true'
          />
        </a>
      </Link>
    </div>
  );
};
