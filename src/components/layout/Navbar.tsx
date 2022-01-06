import { UserProfile, useUser } from '@auth0/nextjs-auth0';
import {
  faBell,
  faShoppingCart,
  faSignInAlt,
  faSignOutAlt,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import { guestMenuItems, userMenuItems } from '@/data/menuItems';

import { setInitial } from '@/features/home/homeSlice';
import { useAppDispatch } from '@/redux/hooks';

import { NavLink } from './navbarWidgets/NavLink';
import ButtonLink from '../links/ButtonLink';
import NextImage from '../NextImage';

export const Navbar = () => {
  const { user, error, isLoading } = useUser();

  return (
    <header className='bg-gray-200'>
      <div className='px-2 mx-auto max-w-7xl sm:px-2'>
        <div className='flex flex-row justify-between items-end py-4 md:justify-start md:space-x-0'>
          <LeftGroup />
          <MiddleGroup user={user} />
          <RightGroup user={user} isLoading={isLoading} error={error} />
        </div>
      </div>
      {error && <span>{error.message}</span>}
    </header>
  );
};

const LeftGroup = () => {
  const dispatch = useAppDispatch();

  return (
    <div
      className='inline-flex justify-start items-center lg:flex-1 lg:w-0 xl:w-20'
      onClick={() => dispatch(setInitial())}
    >
      <Link href='/'>
        <a className='inline-flex'>
          <NextImage
            useSkeleton
            src='/assets/img/logo_transparent.png'
            width='80'
            height='80'
            alt='logo'
          />
        </a>
      </Link>
    </div>
  );
};

interface MiddleProps {
  user?: UserProfile;
  isLoading?: boolean;
  error?: Error;
}

const MiddleGroup = ({ user }: MiddleProps) => {
  return (
    <div className='hidden flex-row flex-wrap gap-6 cursor-pointer md:flex'>
      {user
        ? userMenuItems.map((e) => <NavLink menuItem={e} key={e.title} />)
        : guestMenuItems.map((e) => <NavLink menuItem={e} key={e.title} />)}
    </div>
  );
};

const RightGroup = ({ user }: MiddleProps) => {
  return (
    <div className='hidden justify-end items-center space-x-2 md:flex md:flex-1 lg:w-0'>
      {user ? (
        <ButtonLink className='mt-2' variant='outline' href='/api/auth/logout'>
          <div className='inline-flex flex-row gap-2'>
            <FontAwesomeIcon
              icon={faSignOutAlt}
              className='flex-shrink-0 w-6 h-6'
              aria-hidden='true'
            />
            <span>Sign Out</span>
          </div>
        </ButtonLink>
      ) : (
        <>
          <ButtonLink variant='primary' href='/api/auth/login' className='mt-2'>
            <div className='inline-flex flex-row gap-2'>
              <FontAwesomeIcon
                icon={faSignInAlt}
                className='flex-shrink-0 w-6 h-6'
                aria-hidden='true'
              />
              <span>Sign In</span>
            </div>
          </ButtonLink>
        </>
      )}

      {buildNotifierButton('/cart', faShoppingCart, 1)}

      {user && buildNotifierButton('/notifications', faBell, 5)}
    </div>
  );

  function buildNotifierButton(
    href: string,
    icon: IconDefinition,
    value?: number
  ) {
    return (
      <div className='group relative cursor-pointer'>
        <ButtonLink
          className='mt-2 mr-2'
          variant={
            value == 0 || value === null || value === undefined
              ? 'outline'
              : 'primary'
          }
          href={href}
        >
          <div className='inline-flex flex-row gap-2'>
            <FontAwesomeIcon
              icon={icon}
              className='flex-shrink-0 w-6 h-6'
              aria-hidden='true'
            />
          </div>
        </ButtonLink>
        {value == 0 || value === null || value === undefined ? (
          <></>
        ) : (
          <div className='absolute top-0 right-0 px-2 text-white bg-red-600 rounded-full group-hover:bg-red-400'>
            {`${value}`}
          </div>
        )}
      </div>
    );
  }
};
