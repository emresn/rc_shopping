import Link from 'next/link';
import React from 'react';

import { ProductModel } from '@/model/ProductModel';

import NextImage from './NextImage';

interface Props {
  product: ProductModel;
  index: number;
}

export const ShowProduct = ({ product, index }: Props) => {
  return (
    <Link
      href={`/products/p/${product.key}--${product.id.substring(
        product.id.length - 7
      )}`}
      passHref
    >
      <div className='inline-flex flex-col cursor-pointer hover:bg-gray-200'>
        {product.images != null && (
          <NextImage
            className='w-full'
            width='200'
            height='200'
            key={`${product.key}--${index}`}
            src={product.images[0].path}
            alt={product.images[0].id}
          />
        )}
        <div className='prod-title flex flex-col p-2'>
          <p className='text-2xl font-bold text-gray-900'>{product.title}</p>
          <p className='my-2 text-base'>{product.description}</p>
          <p className='text-xl font-bold text-red-500 line-through'>
            {product.price} $
          </p>
          <div className='inline-flex flex-row gap-3 items-center'>
            <p className='font-bold'>{`%${
              product.discountPrice &&
              Math.floor((product.price / product.discountPrice) * 100 - 100)
            } discount`}</p>
            <p className='text-xl font-bold'>{product.discountPrice} $</p>
          </div>

          <button className='px-6 py-2 my-2 uppercase rounded-xl border border-gray-900 transition duration-200 ease-in hover:text-white hover:bg-indigo-800 focus:outline-none'>
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  );
};
