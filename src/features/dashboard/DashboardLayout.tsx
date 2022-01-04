import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

import LeftMenu from './LeftMenu';

interface Props {
  children: React.ReactNode;
  title: string;
}

const DashboardLayout = ({ children, title }: Props) => {
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <>
      <div className='md:container md:mx-auto'>
        <div className='flex flex-col my-6 sm:flex-row'>
          <div
            className={`border border-gray-200 p-4 shadow-lg flex-row inline-flex ${
              isExpanded && 'w-3/12'
            }`}
          >
            {isExpanded && <LeftMenu />}
            <span
              onClick={() => setIsExpanded(!isExpanded)}
              className='inline-flex text-xl'
            >
              <FontAwesomeIcon
                icon={isExpanded ? faAngleDoubleLeft : faAngleDoubleRight}
              />
            </span>
          </div>

          <div className='p-4 w-full border border-gray-200 shadow-lg sm:border-l'>
            <div className='inline-flex flex-col w-full'>
              <h3>{title}</h3>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
