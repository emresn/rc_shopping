import { useRouter } from 'next/router';
import * as React from 'react';
import { useSelector } from 'react-redux';

import { banners } from '@/data/banners';

import { Banner } from '@/components/Banner';
import { CategoriesRibbon } from '@/components/CategoriesRibbon';
import FlashMessage from '@/components/FlashMessage';
import Loading from '@/components/Loading';
import ProductsComp from '@/components/ProductsComp';
import Seo from '@/components/Seo';

import {
  homeProductsAsync,
  selectHomeProducts,
} from '@/features/home/homeSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { AppState } from '@/redux/store';

export default function HomePage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectHomeProducts);
  const state = useSelector((state: AppState) => state.home);

  if (state.status === 'initial') {
    dispatch(homeProductsAsync(router.pathname));
  }

  return (
    <>
      <Seo />
      {banners && <Banner banners={banners} />}
      <div className='md:container md:mx-auto'>
        <CategoriesRibbon />

        <div className='inline-flex flex-col gap-2 py-4 w-full'>
          <h3>Hot Deals</h3>
          {state.status === 'loading' || state.status === 'initial' ? (
            <Loading />
          ) : state.status === 'failed' ? (
            <FlashMessage message='Error' />
          ) : (
            <ProductsComp products={products}></ProductsComp>
          )}
        </div>
      </div>
    </>
  );
}
