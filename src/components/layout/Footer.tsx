import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import { moreMenuItems, productsMenuItems } from '@/data/menuItems';

import { MenuItemModel } from '@/model/MenuItemModel';

export const Footer = () => {
  return (
    <footer className='text-dark mt-4 bg-gray-200'>
      <div className='inline-flex justify-center w-full'>
        <div className='grid grid-cols-4 py-2 mx-auto w-4/5'>
          <BuildColumn title='Products' categories={productsMenuItems} />
          <BuildColumn title='About Us' categories={moreMenuItems} />
          <BuildColumn title='Products' categories={productsMenuItems} />
          <BuildColumn title='About Us' categories={moreMenuItems} />
        </div>
      </div>
      <div className='text-dark inline-flex justify-center p-2 w-full bg-gray-300'>
        © {new Date().getFullYear()} By{' '}
      </div>
    </footer>
  );
};

interface ColumnProps {
  title: string;
  categories: MenuItemModel[];
}

const BuildColumn = ({ title, categories }: ColumnProps) => {
  return (
    <div className='inline-flex flex-col gap-2 mx-auto my-2'>
      <h4>{title}</h4>
      {categories.map((e) => (
        <Link href={e.href} key={e.title}>
          <a>
            <div className='inline-flex flex-row gap-2 items-center'>
              <span className='mx-auto w-5'>
                <FontAwesomeIcon className='w-5' icon={e.icon} />
              </span>

              <span> {e.title} </span>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
};
