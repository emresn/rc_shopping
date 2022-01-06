import React from 'react';

import { ShowProduct } from '@/components/ShowProduct';

import { ProductModel } from '@/model/ProductModel';

interface Props {
  products: ProductModel[];
}

const ProductsComp = ({ products }: Props) => {
  return (
    <div className='w-full'>
      {products.length > 0 ? (
        <div className='grid grid-cols-2 gap-4 w-full sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-12'>
          {products.map((item, idx) => (
            <ShowProduct product={item} index={idx} key={idx} />
          ))}
        </div>
      ) : (
        <span>{`We don't have any product in this category.`}</span>
      )}
    </div>
  );
};

export default ProductsComp;
