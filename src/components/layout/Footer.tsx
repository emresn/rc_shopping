import { moreMenuItems, productsMenuItems } from '@/data/menuItems';
import { MenuItemModel } from '@/model/MenuItemModel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

interface Props {}

export const Footer = (props: Props) => {
  return (
    <footer className='bg-gray-200 mt-4 text-dark'>
      <div className='inline-flex justify-center w-full'>
        <div className='grid grid-cols-4 mx-auto py-2 w-4/5'>
          <BuildColumn title='Products' categories={productsMenuItems} />
          <BuildColumn title='About Us' categories={moreMenuItems} />
          <BuildColumn title='Products' categories={productsMenuItems} />
          <BuildColumn title='About Us' categories={moreMenuItems} />
        </div>
      </div>
      <div className='bg-gray-300 inline-flex justify-center p-2 text-dark w-full'>
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
    <div className='flex-col gap-2 inline-flex mx-auto my-2'>
      <h4>{title}</h4>
      {categories.map((e) => (
        <Link href={e.href}>
          <a>
            <div className='flex-row gap-2 inline-flex items-center'>
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
