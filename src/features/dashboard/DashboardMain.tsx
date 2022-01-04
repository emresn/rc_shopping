import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import { dashboardItems } from './dashboardItems';

interface Props {
  notification?: number;
}

const DashboardMain = ({ notification = 1 }: Props) => {
  return (
    <>
      <h3 className='mb-4 text-xl font-bold text-gray-700 underline'>
        Dashboard
      </h3>

      {/* notification */}
      <Link href='/dashboard/messages' passHref>
        <div className='p-2 w-full text-center bg-yellow-200 rounded-md cursor-pointer'>
          <span className=''>
            {'You have '}
            <span className='font-bold'>{`${notification} unread `}</span>
            {'notification'}
          </span>
        </div>
      </Link>
      {/* notification */}

      {/* widgets */}
      <div className='my-2'>
        <div className='grid grid-cols-3'>
          {dashboardItems.map((item, idx) => (
            <Link href={`/dashboard/${item.href}`} key={idx} passHref>
              <div
                className={`flex flex-auto flex-col items-center justify-center bg-white hover:bg-gray-200 px-4 py-8 cursor-pointer shadow-xl`}
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

        {/* <Notifications /> */}
      </div>
      {/* widgets */}
    </>
  );
};

export default DashboardMain;
