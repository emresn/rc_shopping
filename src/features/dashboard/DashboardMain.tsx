import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import { dashboardItems } from '../../data/dashboardItems';

const DashboardMain = () => {
  return (
    <>
      <div className='my-2'>
        <div className='grid grid-cols-3'>
          {dashboardItems.map((item, idx) => (
            <Link href={`/dashboard${item.href}`} key={idx} passHref>
              <div
                className={`flex flex-auto flex-col items-center justify-center bg-white hover:bg-gray-200 px-4 py-8 cursor-pointer`}
              >
                <div
                  className={`w-10 sm:w-20 h-14 sm:h-24 flex justify-center ${item.className}`}
                >
                  <FontAwesomeIcon icon={item.icon} size='6x' />
                </div>
                <span className='mt-12 sm:m-2'>{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
