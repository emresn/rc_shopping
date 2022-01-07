import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';

import { thumbnailResize } from '@/constants/imageResizeRules';
import { addCartItem } from '@/features/cart/cartSlice';
import { generateResizeImageHref } from '@/helpers/generateResizeImageHref';
import { ProductCountModelFromProduct } from '@/model/ProductCountModel';
import { ProductModel } from '@/model/ProductModel';
import { useAppDispatch } from '@/redux/hooks';

import NextImage from './NextImage';

interface Props {
  product: ProductModel;
  index: number;
}

export const ShowProduct = ({ product, index }: Props) => {
  const dispatch = useAppDispatch();

  const imageUrl =
    product.images &&
    generateResizeImageHref(product.images[0].href, thumbnailResize);
  return (
    <div className='group flex flex-col justify-between items-center p-2 bg-white rounded-lg border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-100 hover:shadow-xl'>
      <Link href={`/products/p/${product.key}`} passHref>
        <div className='inline-flex flex-col w-full h-full'>
          {product.images != null && (
            <NextImage
              useSkeleton
              className='w-full group-hover:opacity-60'
              priority
              width='200'
              height='200'
              key={`${product.key}--${index}`}
              src={imageUrl ?? product.images[0].href}
              alt={product.images[0].id}
            />
          )}

          <div className='flex flex-col justify-between p-2 h-full'>
            <p className='text-2xl font-bold text-gray-900'>{product.title}</p>
            <p className='my-2 text-base'>{product.subtitle}</p>
            <div className='inline-flex flex-auto'></div>
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
          </div>
        </div>
      </Link>

      <button
        onClick={() => {
          dispatch(addCartItem([ProductCountModelFromProduct(product, 1)]));
          toast.success('Added');
          // dispatch(
          //   showToast({ message: 'Successfully added', type: 'success' })
          // );
        }}
        className='px-6 py-2 my-2 uppercase rounded-xl border border-gray-900 transition duration-200 ease-in hover:text-white hover:bg-indigo-800 focus:outline-none'
      >
        Add to cart
      </button>
    </div>
  );
};
