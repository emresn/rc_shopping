import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';

const TrackOrderView = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-48'>
      <h3>Track Order</h3>
      <div className='inline-flex flex-row gap-2 justify-start'>
        <input
          type='text'
          name='text'
          id='text'
          className='p-3 font-medium text-primary-900 bg-gray-200 rounded-lg'
        />
        <ButtonLink href={'/track-order'}> Search </ButtonLink>
      </div>
    </div>
  );
};

export default TrackOrderView;
