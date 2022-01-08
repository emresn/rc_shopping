import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';

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

import { AppState } from '../../redux/store';

const CategoryView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { category } = router.query;
  const categoryModel = CategoryModelFromString(`${category}`);
  const href = categoryModel && generateHrefFromCategoryModel(categoryModel);
  const state = useSelector((state: AppState) => state.category);

  if (
    state.status === 'initial' ||
    (categoryModel && categoryModel.name !== state.filterOptions.category)
  ) {
    href && dispatch(categoryProductsAsync(href));
  }

  const products = useAppSelector(selectCategoryProducts);

  return (
    <>
      <Seo />

      <div className='md:container md:mx-auto'>
        <div className='inline-flex flex-col gap-2 py-4 w-full'>
          <h3>{category}</h3>

          {state.status === 'loading' || state.status === 'initial' ? (
            <div className='mx-auto w-60 h-60'>
              <Loading />
            </div>
          ) : state.status === 'failed' ? (
            <></>
          ) : (
            <ProductsComp products={products}></ProductsComp>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryView;
