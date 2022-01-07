import React from 'react';
import { useSelector } from 'react-redux';

import Seo from '@/components/Seo';

import BuildCountButtonsCell from '@/features/cart/subviews/buildCountButtonsCell';
import { BuildHeadersRow } from '@/features/cart/subviews/BuildHeadersRow';
import BuildImageCell from '@/features/cart/subviews/buildImageCell';
import { buildPlainLink } from '@/features/cart/subviews/buildPlainLink';
import BuildTotalPriceCell from '@/features/cart/subviews/buildTotalPriceCell';
import { ProductCountModel } from '@/model/ProductCountModel';
import { AppState } from '@/redux/store';

const CartView = () => {
  const state = useSelector((state: AppState) => state.cart);

  const mainColClass =
    'bg-white flex-col inline-flex rounded-lg shadow-md w-full';
  const rowClass =
    'flex-row gap-4 inline-flex items-center justify-between p-3 w-full';

  interface BuildItemRowProps {
    idx: number;
    item: ProductCountModel;
    rowClass: string;
  }
  const BuildItemRow = ({ idx, item, rowClass }: BuildItemRowProps) => {
    return (
      <div
        key={idx}
        className={`${rowClass} font-medium group text-md hover:bg-gray-200`}
      >
        <div className='w-2/12'>
          <BuildImageCell item={item} />
        </div>
        <div className='w-2/12'>
          {buildPlainLink(item, item.product.title, true)}
        </div>
        <div className='w-3/12 text-center'>
          {buildPlainLink(item, item.product.subtitle ?? '')}
        </div>
        <div className='inline-flex flex-row gap-4 justify-center items-center w-3/12'>
          <BuildCountButtonsCell item={item} idx={idx} />
        </div>
        <span className='w-1/12 text-center'>{`${item.product.price} $`}</span>
        <div className='relative w-1/12 text-center'>
          <BuildTotalPriceCell item={item} />
        </div>
      </div>
    );
  };

  return (
    <>
      <Seo />

      <div className='md:container md:mx-auto'>
        <div className='inline-flex flex-col gap-2 py-4 w-full'>
          <h3>My Cart</h3>
          <div className={mainColClass}>
            {state.cartItems.length > 0 ? (
              <>
                <BuildHeadersRow rowClass={rowClass} />
                <>
                  {state.cartItems.map((e, idx) => (
                    <BuildItemRow
                      idx={idx}
                      item={e}
                      rowClass={rowClass}
                      key={idx}
                    />
                  ))}
                </>
              </>
            ) : (
              <>
                <div className={rowClass}>Your cart is empty</div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartView;
