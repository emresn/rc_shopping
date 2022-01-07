import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import { dashboardItems } from '../../data/dashboardItems';

const DashboardMain = () => {
  return (
    <>
      <div className='flex flex-col gap-4 justify-between items-start h-full lg:flex-row'>
        <div className='grid flex-auto grid-cols-2 gap-4 w-full md:grid-cols-3 md:gap-12'>
          {dashboardItems.map((item, idx) => (
            <Link href={`/dashboard${item.href}`} key={idx} passHref>
              <div
                className={`flex my-2 gap-4 flex-col items-center justify-center cursor-pointer hover:opacity-80 w-full`}
              >
                <div className={`  ${item.className} scale-75 md:scale-100`}>
                  <FontAwesomeIcon
                    icon={item.icon}
                    size='3x'
                    className='scale-150'
                  />
                </div>
                <span className='font-semibold text-center'>{item.title}</span>
              </div>
            </Link>
          ))}
        </div>
        <div className='inline-flex flex-col gap-4 justify-between items-start my-4 w-full h-full lg:my-0'>
          <div className='flex flex-col p-4 w-full h-1/2 bg-amber-200 rounded-lg shadow-md'>
            <h4>Notifications</h4>
            <p>afasf</p>
          </div>
          <div className='flex flex-col p-4 w-full h-1/2 bg-primary-200 rounded-lg shadow-md'>
            <h4>Messages</h4>
            <p>afasf</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardMain;
