import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';

import Button from '@/components/buttons/Button';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';

import { thumbnailResize } from '@/constants/imageResizeRules';
import {
  decrementCartItem,
  incrementCartItem,
  removeCartItem,
} from '@/features/cart/cartSlice';
import { generateResizeImageHref } from '@/helpers/generateResizeImageHref';
import { useAppDispatch } from '@/redux/hooks';
import { AppState } from '@/redux/store';

const CartView = () => {
  const state = useSelector((state: AppState) => state.cart);
  const dispatch = useAppDispatch();

  return (
    <>
      <Seo />

      <div className='md:container md:mx-auto'>
        <div className='inline-flex flex-col gap-2 py-4 w-full'>
          <h3>My Cart</h3>
          <div className='inline-flex flex-col w-full bg-white rounded-lg shadow-md'>
            {state.cartItems.length > 0 ? (
              <>
                <div className='inline-flex flex-row gap-4 justify-between p-3 w-full'>
                  <div className='w-2/12'></div>
                  <h4 className='w-2/12'>Product</h4>
                  <h4 className='w-3/12 text-center'>Details</h4>
                  <h4 className='w-3/12 text-center'>Quantity</h4>
                  <h4 className='w-1/12 text-center'>Unit Price</h4>
                  <h4 className='w-1/12 text-right'>Total Price</h4>
                </div>
                <>
                  {state.cartItems.map((e, idx) => (
                    <div
                      key={idx}
                      className='group text-md inline-flex flex-row gap-4 justify-between items-center p-3 w-full font-medium hover:bg-gray-200'
                    >
                      <div className='w-2/12'>
                        <div className=''>
                          {e.product.images && (
                            <NextImage
                              useSkeleton
                              className='group-hover:brightness-90'
                              width='150'
                              height='150'
                              alt={e.product.images[0].id}
                              src={generateResizeImageHref(
                                e.product.images[0].href,
                                thumbnailResize
                              )}
                            ></NextImage>
                          )}
                        </div>
                      </div>
                      <div className='w-2/12'>
                        <Link href={`../products/p/${e.product.key}`}>
                          <a>
                            <span className='text-primary-500'>
                              {e.product.title}
                            </span>
                          </a>
                        </Link>
                      </div>
                      <div className='w-3/12 text-center'>
                        <Link href={`../products/p/${e.product.key}`}>
                          <a>
                            <span className=''>{e.product.subtitle}</span>
                          </a>
                        </Link>
                      </div>
                      <div className='inline-flex flex-row gap-4 justify-center items-center w-3/12'>
                        <Button
                          variant='light'
                          className='rounded-full'
                          onClick={() => dispatch(decrementCartItem(idx))}
                        >
                          -
                        </Button>
                        <span className='text-right'>{e.count}</span>
                        <Button
                          variant='light'
                          className='rounded-full'
                          onClick={() => dispatch(incrementCartItem(idx))}
                        >
                          +
                        </Button>
                      </div>

                      <span className='w-1/12 text-center'>
                        {`${e.product.price} $`}
                      </span>
                      <div className='relative w-1/12 text-center'>
                        <span> {`${e.product.price * e.count} $`}</span>

                        <button
                          className='absolute top-0 right-0 text-red-500'
                          onClick={() =>
                            dispatch(removeCartItem({ id: e.product.id }))
                          }
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                      </div>
                    </div>
                  ))}
                </>
              </>
            ) : (
              <>
                <div className='inline-flex flex-row gap-4 justify-between p-3 w-full'>
                  Your cart is empty
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartView;
