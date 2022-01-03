import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import { categories } from '@/data/categories';

export const CategoriesRibbon = () => {
  const className =
    'flex flex-1 py-4 px-6 bg-white hover:bg-gray-800 items-center justify-center transition ease-in duration-200 hover:text-gray-200';

  return (
    <div className='flex flex-wrap mt-8 border border-gray-300'>
      {categories.map((e) => (
        <Link href={e.href} key={e.name} passHref>
          <button className={className}>
            <div className='w-10'>
              <FontAwesomeIcon icon={e.icon} />
            </div>
            <span className='ml-2'>{e.name}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};
