import Link from 'next/link';
import React from 'react';

const FlashMessage = () => {
  return (
    <Link href='/dashboard/messages' passHref>
      <div className='p-2 w-full text-center bg-yellow-200 rounded-md cursor-pointer'>
        <span className=''>
          {'You have '}
          <span className='font-bold'>{`a unread `}</span>
          {'notification'}
        </span>
      </div>
    </Link>
  );
};

export default FlashMessage;
