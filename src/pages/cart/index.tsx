import React from 'react';
import { useSelector } from 'react-redux';

import SubpageTemplate from '@/components/layout/sub/subLayout';

import { BuildHeadersRow } from '@/features/cart/subviews/BuildHeadersRow';
import BuildItemRows from '@/features/cart/subviews/buildItemRows';
import { AppState } from '@/redux/store';

const CartView = () => {
  const state = useSelector((state: AppState) => state.cart);

  const rowClass =
    'flex flex-row gap-4 items-center justify-between p-3 w-full';

  return (
    <SubpageTemplate title='My Cart'>
      <div>
        {state.cartItems.length > 0 ? (
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
      </div>
    </SubpageTemplate>
  );
};

export default CartView;
