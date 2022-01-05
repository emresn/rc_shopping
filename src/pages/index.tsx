import * as React from 'react';

import { banners } from '@/data/banners';

import { Banner } from '@/components/Banner';
import { CategoriesRibbon } from '@/components/CategoriesRibbon';
import Seo from '@/components/Seo';

import ProductsComp from '@/features/product/ProductsComp';

export default function HomePage() {
  return (
    <>
      <Seo />
      {banners && <Banner banners={banners} />}
      <div className='md:container md:mx-auto'>
        <CategoriesRibbon />

        <div className='inline-flex flex-col gap-2 py-4 w-full'>
          <h3>Hot Deals</h3>
          <ProductsComp />
        </div>
      </div>
    </>
  );
}
