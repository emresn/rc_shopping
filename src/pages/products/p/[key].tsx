import { faArrowLeft, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Button from '@/components/buttons/Button';
import { Carousel } from '@/components/Carousel';
import ButtonLink from '@/components/links/ButtonLink';
import Loading from '@/components/Loading';

import { homeProductsAsync } from '@/features/home/homeSlice';
import { useAppDispatch } from '@/redux/hooks';
import { AppState } from '@/redux/store';

const ProductView = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { key } = router.query;

  const state = useSelector((state: AppState) => state);

  if (state.home.status === 'initial') {
    dispatch(homeProductsAsync(router.pathname));
  }

  const product = [...state.category.products, ...state.home.products].filter(
    (e) => e.key === key
  )[0];

  const [count, setCount] = useState(1);

  const countHandler = (val: number) => {
    setCount(val);
  };
  return (
    <div className='relative my-4 h-screen md:container md:mx-auto'>
      <Button
        className='absolute -top-4 -right-4 bg-opacity-40 rounded-lg'
        variant='light'
        onClick={() => router.back()}
      >
        <span className='flex flex-row gap-2 items-center text-primary-500'>
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          <span>Back</span>
        </span>
      </Button>

      {product ? (
        <div className='flex flex-row gap-5 p-4 h-3/4 bg-gray-100 rounded-lg border-2 shadow-lg'>
          <Carousel item={product} className='flex-auto' />

          <div className='inline-flex flex-col gap-4 justify-between w-2/3'>
            {buildTitleAndSubtitle()}
            {buildPricesAndCountSelector()}
            {buildDescription()}
            {buildTotalPriceAndAddCart()}
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );

  function buildTotalPriceAndAddCart() {
    return (
      <div className='inline-flex flex-col gap-1'>
        <div className='inline-flex flex-row gap-4 justify-end items-center text-base font-bold'>
          <span>Total Price:</span>
          <span className='text-lg'>
            {`${(Number(count) * Number(product.discountPrice)).toFixed(2)} $`}
          </span>
        </div>

        <div className='inline-flex flex-row items-end'>
          <div className='flex-auto'></div>
          <ButtonLink className='mr-0' href={'#'}>
            <div className='inline-flex flex-row gap-2'>
              <span>
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
              <span>Add to cart</span>
            </div>
          </ButtonLink>
        </div>
      </div>
    );
  }

  function buildDescription() {
    return (
      <>
        <p className='text-ellipsis flex flex-nowrap my-2 text-base text-justify'>
          {product.description}
        </p>
        <div className='flex-auto'></div>
      </>
    );
  }

  function buildPricesAndCountSelector() {
    return (
      <div className='inline-flex flex-row justify-between items-center'>
        <div className='inline-flex flex-col'>
          <div className='inline-flex flex-row gap-3 items-center'>
            <p className='font-bold'>Price</p>
            {!product.discountPrice ? (
              <p className='text-xl font-bold'>
                {parseFloat(product.price.toString()).toFixed(2)} $
              </p>
            ) : (
              <p className='text-xl font-bold text-red-500 line-through'>
                {parseFloat(product.price.toString()).toFixed(2)} $
              </p>
            )}
          </div>
          <div className='inline-flex flex-row gap-3 items-center'>
            <p className='font-bold'>{`%${
              product.discountPrice
                ? Math.floor(
                    (product.price / product.discountPrice) * 100 - 100
                  )
                : 0
            } discount`}</p>
            <p className='px-2 py-1 text-xl font-bold bg-orange-300 rounded-lg'>
              {product.discountPrice && product.discountPrice.toFixed(2)} $
            </p>
          </div>
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
            {Array.from(Array(product.stock).keys()).map((x) => (
              <option key={`${x + 1}`} value={x + 1}>
                {`${x + 1}`}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }

  function buildTitleAndSubtitle() {
    return (
      <div className='inline-flex flex-col'>
        <p className='text-2xl font-bold text-gray-900'>{product.title}</p>
        <p className='my-2 text-base'>{product.subtitle}</p>
      </div>
    );
  }
};

export default ProductView;
