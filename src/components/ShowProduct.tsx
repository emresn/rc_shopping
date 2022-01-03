import { ProductModel } from '@/model/ProductModel';
import Link from 'next/link';
import React from 'react';

interface Props {
  product: ProductModel;
  index: number;
}

export const ShowProduct = ({ product, index }: Props) => {
  return (
    <Link href={`/products/p/${product.key}`}>
      <div className='flex-col inline-flex hover:bg-gray-200'>
        <div className=''>
          {product.images != null && (
            <img
              key={`${product.key}--${index}`}
              className='h-60 w-full'
              src={product.images[0].path}
              alt={product.images[0].id}
            />
          )}
        </div>
        <div className='flex flex-col p-2 prod-title'>
          <p className='font-bold text-2xl text-gray-900'>{product.title}</p>
          <p className='my-2 text-base'>{product.description}</p>
          <p className='font-bold line-through text-red-500 text-xl'>
            {product.price} $
          </p>
          <div className='flex-row gap-3 inline-flex items-center'>
            <p className='font-bold'>{`%${
              product.discountPrice &&
              Math.floor((product.price / product.discountPrice) * 100 - 100)
            } discount`}</p>
            <p className='font-bold text-xl'>{product.discountPrice} $</p>
          </div>

          <button className='border border-gray-900 duration-200 ease-in my-2 px-6 py-2 rounded-xl transition uppercase hover:bg-indigo-800 hover:text-white focus:outline-none'>
            Add to cart
          </button>
        </div>
      </div>
    </Link>
  );
};
