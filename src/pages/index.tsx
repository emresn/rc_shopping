import * as React from 'react';

import Seo from '@/components/Seo';
import { Banner } from '@/components/Banner';
import { banners } from '@/data/banners';
import { CategoriesRibbon } from '@/components/CategoriesRibbon';
import { ShowProduct } from '@/components/ShowProduct';
import { ProductsExampleList } from '@/data/products';

export default function HomePage() {
  return (
    <>
      <Seo />
      {banners && <Banner banners={banners} />}
      <div className='md:container md:mx-auto'>
        <CategoriesRibbon />
        <div className='flex-col gap-4 inline-flex py-4'>
          <h3>Popular Products</h3>
          <div className='gap-8 grid grid-cols-4'>
            {ProductsExampleList.map((item, index) => (
              <ShowProduct
                product={item}
                key={`${item.key}_${index}`}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className='flex-col gap-4 inline-flex py-4'>
          <h3>Hot Deals</h3>
          <div className='gap-8 grid grid-cols-4'>
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
