import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

import Loading from '@/components/Loading';
import ProductsComp from '@/components/ProductsComp';

import {
  homeProductsAsync,
  selectHomeProducts,
} from '@/features/home/homeSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { AppState } from '@/redux/store';

const ProductsView = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const state = useSelector((state: AppState) => state.home);

  if (state.status === 'initial') {
    dispatch(homeProductsAsync(router.pathname));
  }

  const products = useAppSelector(selectHomeProducts);

  return (
    <div className='h-screen md:container md:mx-auto'>
      {state.status === 'loading' || state.status === 'initial' ? (
        <Loading />
      ) : state.status === 'failed' ? (
        <></>
      ) : (
        <ProductsComp products={products}></ProductsComp>
      )}
    </div>
  );
};

export default ProductsView;
