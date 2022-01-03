import { useRouter } from 'next/router';
import React, { useState } from 'react';

import { ProductsExampleList } from '@/data/Products';

import { Carousel } from '@/components/Carousel';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import Loading from '@/components/Loading';

const ProductView = () => {
  const router = useRouter();
  const { id } = router.query;
  const splitted = `${id}`.split('--');
  const key = splitted[0];

  const item = ProductsExampleList.filter(
    (e) => e.key == key && splitted[1] == e.id.substring(e.id.length - 7)
  )[0];
  const [count, setCount] = useState(1);

  const countHandler = (val: number) => {
    setCount(val);
  };
  return (
    <div className='h-screen md:container md:mx-auto'>
      {/* {showFlash && (
        <Flash type={flashType} showFlash={showFlash} text={flashMsg} />
      )} */}

      <div className='inline-flex flex-row justify-end py-2 w-full'>
        <ArrowLink
          direction='left'
          className='text-xl'
          href={`/products/${item && item.category.name}`}
        >
          Back
        </ArrowLink>
      </div>

      <div className='flex flex-row justify-end'></div>
      {item ? (
        <div className='flex flex-row gap-5 p-8 bg-white rounded-2xl border-2 border-gray-200'>
          <Carousel item={item} className='w-1/3' />
          <div className='inline-flex flex-col flex-auto'>
            <p className='text-2xl font-bold text-gray-900'>{item.title}</p>
            <p className='my-2 text-base'>{item.description}</p>
            <div className='inline-flex flex-row justify-between items-center'>
              <div className='inline-flex flex-row gap-3 items-center'>
                <p className='font-bold'>Price</p>
                {!item.discountPrice ? (
                  <p className='text-xl font-bold'>{item.price} $</p>
                ) : (
                  <p className='text-xl font-bold text-red-500 line-through'>
                    {item.price} $
                  </p>
                )}
              </div>
              <div className='space-x-5'>
                <span className='text-base font-bold'>Count</span>
                <select
                  className='px-5 py-3 text-base bg-gray-200 border-b-2 border-gray-500 focus:border-b-2 focus:border-indigo-500 focus:outline-none'
                  value={count}
                  required
                  id='country'
                  onChange={(e) => countHandler(parseInt(e.target.value))}
                >
                  {Array.from(Array(item.stock).keys()).map((x) => (
                    <option key={`${x + 1}`} value={x + 1}>
                      {`${x + 1}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className='inline-flex flex-row gap-3 items-center'>
              <p className='font-bold'>{`%${
                item.discountPrice
                  ? Math.floor((item.price / item.discountPrice) * 100 - 100)
                  : 0
              } discount`}</p>
              <p className='text-xl font-bold'>
                {item.discountPrice && item.discountPrice.toFixed(2)} $
              </p>
            </div>
            <div className='inline-flex flex-row gap-10 justify-end items-center my-10 text-base font-bold'>
              <div>Total Price</div>
              <div>
                <span>
                  {(Number(count) * Number(item.discountPrice)).toFixed(2)} $
                </span>
              </div>
            </div>

            <div className='inline-flex flex-row items-end'>
              <div className='flex-auto'></div>
              <ButtonLink
                className='mr-0'
                onClick={() => {
                  print();
                }}
                href={'#'}
              >
                Add to cart
              </ButtonLink>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default ProductView;
