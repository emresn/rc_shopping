import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

import FlashMessage from '@/components/FlashMessage';
import Loading from '@/components/Loading';
import ProductsComp from '@/components/ProductsComp';
import Seo from '@/components/Seo';

import {
  categoryProductsAsync,
  selectCategoryProducts,
} from '@/features/category/categorySlice';
import { generateHrefFromCategoryModel } from '@/helpers/generateHrefFromCategoryModel';
import { CategoryModelFromString } from '@/model/CategortModel';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { AppState } from '@/redux/store';

const CategoryView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { category } = router.query;
  const categoryModel = CategoryModelFromString(`${category}`);
  const href = generateHrefFromCategoryModel(categoryModel);
  const state = useSelector((state: AppState) => state.category);

  if (
    state.status === 'initial' ||
    categoryModel.name !== state.filterOptions.category
  ) {
    dispatch(categoryProductsAsync(href));
  }

  const products = useAppSelector(selectCategoryProducts);

  return (
    <>
      <Seo />

      <div className='md:container md:mx-auto'>
        <div className='inline-flex flex-col gap-2 py-4 w-full'>
          <h3>{category}</h3>

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
};

export default CategoryView;
