import React from 'react';
import { useSelector } from 'react-redux';

import Button from '@/components/buttons/Button';
import SubpageTemplate from '@/components/layout/sub/subLayout';

import { BuildHeadersRow } from '@/features/cart/subviews/BuildHeadersRow';
import BuildItemRows from '@/features/cart/subviews/buildItemRows';
import { AppState } from '@/redux/store';

const CartView = () => {
  const state = useSelector((state: AppState) => state.cart);

  function calcTotalPrice() {
    let price = 0;
    state.cartItems.map((e) => {
      const unitPrice = e.product.discountPrice
        ? e.product.discountPrice * e.count
        : e.product.price * e.count;

      price = price + unitPrice;
    });

    return Math.floor(price);
  }

  const totalPrice = calcTotalPrice();
  const vatPrice = Math.floor((totalPrice * 18) / 100);

  const rowClass =
    'flex flex-row gap-4 items-center justify-between p-3 w-full';

  return (
    <SubpageTemplate title='My Cart'>
      <div>
        {state.cartItems && state.cartItems.length > 0 ? (
          <>
            <BuildHeadersRow rowClass={rowClass} />
            <>
              {state.cartItems.map((e, idx) => (
                <BuildItemRows
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

        <div className='flex justify-end'>
          <div className='text-md flex flex-row gap-2 items-center p-3 font-semibold'>
            <span>VAT</span>
            <span className='p-1 text-black bg-white rounded-lg'>
              {vatPrice} $
            </span>
          </div>
        </div>

        <div className='flex justify-end'>
          <Button>
            <div className='flex flex-row gap-2 items-center'>
              <span>Order Now</span>
              <span className='p-1 px-2 font-semibold text-black bg-white rounded-lg'>
                {totalPrice + vatPrice} $
              </span>
            </div>
          </Button>
        </div>
      </div>
    </SubpageTemplate>
  );
};

export default CartView;
