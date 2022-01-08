import { UserProfile, useUser } from '@auth0/nextjs-auth0';
import {
  faBell,
  faShoppingCart,
  faSignInAlt,
  faUser,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { guestMenuItems, userMenuItems } from '@/data/menuItems';

import { putCartItems } from '@/features/cart/cartSlice';
import { setInitial } from '@/features/home/homeSlice';
import { ProductCountModel } from '@/model/ProductCountModel';
import { useAppDispatch } from '@/redux/hooks';
import { AppState } from '@/redux/store';

import { NavLink } from './navbarWidgets/NavLink';
import ButtonLink from '../links/ButtonLink';
import NextImage from '../NextImage';

export const Navbar = () => {
  const { user, error, isLoading } = useUser();
  const dispatch = useAppDispatch();
  const state = useSelector((state: AppState) => state.category);

  useEffect(() => {
    if (state.status === 'initial') {
      const localString = localStorage.getItem('rcShopCart');
      const cartItems: ProductCountModel[] =
        localString && JSON.parse(localString);
      dispatch(putCartItems(cartItems));
    }
  }, [state, dispatch]);

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
            priority
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

interface NavProps {
  user?: UserProfile;
  isLoading?: boolean;
  error?: Error;
}

const MiddleGroup = ({ user }: NavProps) => {
  return (
    <div className='hidden flex-row flex-wrap gap-6 cursor-pointer md:flex'>
      {user
        ? userMenuItems.map((e) => <NavLink menuItem={e} key={e.title} />)
        : guestMenuItems.map((e) => <NavLink menuItem={e} key={e.title} />)}
    </div>
  );
};

const RightGroup = ({ user }: NavProps) => {
  const cartState = useSelector((state: AppState) => state.cart);

  return (
    <div className='hidden gap-2 justify-end items-end scale-75 sm:flex md:flex-1 lg:w-0 lg:scale-100'>
      {user ? (
        <ButtonLink
          className=''
          variant='outline'
          href='/dashboard/profile-informations'
        >
          <div className='inline-flex flex-row gap-2'>
            <FontAwesomeIcon
              icon={faUser}
              className='w-6 h-6'
              aria-hidden='true'
            />
          </div>
        </ButtonLink>
      ) : (
        <>
          <ButtonLink variant='primary' href='/api/auth/login' className='mt-2'>
            <div className='inline-flex flex-row gap-2'>
              <FontAwesomeIcon
                icon={faSignInAlt}
                className='w-6 h-6'
                aria-hidden='true'
              />
              <span>Sign In</span>
            </div>
          </ButtonLink>
        </>
      )}
      {user && buildCartAndNotifierButton('/notifications', faBell, 0)}

      {buildCartAndNotifierButton(
        '/cart',
        faShoppingCart,
        cartState.cartItems ? cartState.cartItems.length : 0
      )}
    </div>
  );

  function buildCartAndNotifierButton(
    href: string,
    icon: IconDefinition,
    value?: number
  ) {
    return (
      <div className='group relative cursor-pointer'>
        <ButtonLink
          className=''
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
              className='w-6 h-6'
              aria-hidden='true'
            />
          </div>
        </ButtonLink>
        {value == 0 || value === null || value === undefined ? (
          <></>
        ) : (
          <div className='absolute -top-2 -right-2 px-2 text-white bg-red-600 rounded-full group-hover:bg-red-400'>
            {`${value}`}
          </div>
        )}
      </div>
    );
  }
};
