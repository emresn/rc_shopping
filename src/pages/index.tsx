import * as React from 'react';

import { banners } from '@/data/banners';
import { ProductsExampleList } from '@/data/Products';

import { Banner } from '@/components/Banner';
import { CategoriesRibbon } from '@/components/CategoriesRibbon';
import Seo from '@/components/Seo';
import { ShowProduct } from '@/components/ShowProduct';

export default function HomePage() {
  return (
    <>
      <Seo />
      {banners && <Banner banners={banners} />}
      <div className='md:container md:mx-auto'>
        <CategoriesRibbon />
        <div className='inline-flex flex-col gap-4 py-4'>
          <h3>Popular Products</h3>
          <div className='grid grid-cols-4 gap-8'>
            {ProductsExampleList.map((item, index) => (
              <ShowProduct
                product={item}
                key={`${item.key}_${index}`}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className='inline-flex flex-col gap-4 py-4'>
          <h3>Hot Deals</h3>
          <div className='grid grid-cols-4 gap-8'>
            {ProductsExampleList.map((item, index) => (
              <ShowProduct
                product={item}
                key={`${item.key}_${index}`}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
