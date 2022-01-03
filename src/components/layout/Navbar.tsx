import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import { guestMenuItems } from '@/data/menuItems';

import { NavLink } from './navbarWidgets/NavLink';
import NextImage from '../NextImage';

export const Navbar = () => {
  return (
    <header className='bg-gray-200'>
      <div className='px-2 mx-auto max-w-7xl sm:px-2'>
        <div className='flex flex-row justify-between items-end py-6 md:justify-start md:space-x-0'>
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
          <NextImage
            useSkeleton
            src='/assets/img/logo_transparent.png'
            width='80'
            height='80'
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
        <NavLink menuItem={e} key={e.title} />
      ))}
    </div>
  );
};

const RightGroup = () => {
  return (
    <div className='hidden justify-end items-center space-x-2 md:flex md:flex-1 lg:w-0'>
      <Link href={'/api/auth/login'}>
        <a className='mx-2 text-base font-medium text-gray-700 whitespace-nowrap hover:text-black'>
          Sign In
        </a>
      </Link>

      <Link href={'/api/auth/login'}>
        <a className='px-4 py-2 text-base font-medium text-white whitespace-nowrap bg-indigo-600 rounded-md border border-transparent shadow-sm md:px-2 hover:bg-indigo-700'>
          Sign up
        </a>
      </Link>
      <Link href={'/cart'}>
        <a className='inline-flex justify-center items-center p-2 whitespace-nowrap rounded-md shadow-sm hover:bg-gray-300'>
          <FontAwesomeIcon
            icon={faShoppingCart}
            className='flex-shrink-0 w-6 h-6'
            aria-hidden='true'
          />
        </a>
      </Link>
    </div>
  );
};
