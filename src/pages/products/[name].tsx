import { useRouter } from 'next/router';
import React from 'react';

import { ProductsExampleList } from '@/data/Products';

import { ShowProduct } from '@/components/ShowProduct';

const CategoryView = () => {
  const router = useRouter();
  const { name } = router.query;
  function capitalizeFirstLetter(label: string) {
    return label.charAt(0).toUpperCase() + label.slice(1);
  }

  return (
    <div className=''>
      <div className='inline-flex flex-col justify-between w-full'>
        <h3>{name && `${capitalizeFirstLetter(name.toString())} `}</h3>
        <div className='grid grid-cols-4 gap-8'>
          {[...ProductsExampleList, ...ProductsExampleList].map((e, idx) => (
            <ShowProduct product={e} index={0} key={`${e.id}--${idx}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryView;
