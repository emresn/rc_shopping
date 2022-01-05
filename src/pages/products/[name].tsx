import { useRouter } from 'next/router';
import React from 'react';

import Seo from '@/components/Seo';

import ProductsComp from '@/features/product/ProductsComp';

const CategoryView = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <Seo />

      <div className='md:container md:mx-auto'>
        <div className='inline-flex flex-col gap-2 py-4 w-full'>
          <h3>{name}</h3>
          <ProductsComp />
        </div>
      </div>
    </>
  );
};

export default CategoryView;
