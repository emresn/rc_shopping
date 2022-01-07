import React from 'react';

import Seo from '@/components/Seo';

interface Props {
  children: React.ReactNode;
  title: string;
}

const SubLayout = ({ children, title }: Props) => {
  const mainColClass =
    'bg-white flex-col inline-flex rounded-lg shadow-lg w-full  p-1 sm:p-4 my-4 border border-gray-400 border-slate-600';
  return (
    <>
      <Seo />
      <div className='md:container md:mx-auto'>
        <div className={mainColClass}>
          <h3>{title}</h3>
          {children}
        </div>
      </div>
    </>
  );
};

export default SubLayout;
