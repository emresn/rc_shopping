import React from 'react';
import { useSelector } from 'react-redux';

import FlashMessage from '@/components/FlashMessage';
import Loading from '@/components/Loading';
import { ShowProduct } from '@/components/ShowProduct';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { AppState } from '@/redux/store';

import { productsAsync, selectProducts } from './productSlice';

const ProductsComp = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectProducts);
  const state = useSelector((state: AppState) => state.products);

  state.status === 'initial' && dispatch(productsAsync());

  return (
    <div className='w-full'>
      {state.status === 'updated' ? (
        <div className='grid grid-cols-2 gap-4 w-full sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8 lg:grid-cols-4 lg:gap-12'>
          {products.map((item, idx) => (
            <ShowProduct product={item} index={idx} key={idx} />
          ))}
        </div>
      ) : state.status === 'failed' ? (
        <FlashMessage isError message={'Error'} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProductsComp;
