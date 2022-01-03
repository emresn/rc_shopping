import React from 'react';

interface Props {}

export const Footer = (props: Props) => {
  const buildColumn = (
    <div className='flex-col gap-2 inline-flex mx-auto my-2'>
      <h4>aafs</h4>
      <span>egaega</span>
      <span>aafs</span>
      <span>egaega</span>
    </div>
  );
  return (
    <footer className='bg-gray-200 mt-4 text-dark'>
      <div className='inline-flex justify-center w-full'>
        <div className='grid grid-cols-4 mx-auto py-2 w-4/5'>
          {buildColumn}
          {buildColumn}
          {buildColumn}
          {buildColumn}
        </div>
      </div>
      <div className='bg-gray-300 inline-flex justify-center p-2 text-dark w-full'>
        © {new Date().getFullYear()} By{' '}
      </div>
    </footer>
  );
};
