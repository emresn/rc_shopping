import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductCountModel } from '@/model/ProductCountModel';
import { AppState } from '@/redux/store';

export interface CartState {
  cartItems: ProductCountModel[];
  status: 'initial' | 'success' | 'failed' | 'warning' | 'updated';
}

const initialState: CartState = {
  cartItems: [],
  status: 'initial',
};

export const cartSlice = createSlice({
  name: 'CartState',
  initialState,
  reducers: {
    putCartItem: (state, action: PayloadAction<ProductCountModel[]>) => {
      state.cartItems = action.payload;
    },
    addCartItem: (state, action: PayloadAction<ProductCountModel[]>) => {
      if (state.cartItems.length === 0) {
        state.cartItems = action.payload;
      } else {
        for (let index = 0; index < action.payload.length; index++) {
          const sameProductIdx = state.cartItems.findIndex(
            (e) => e.product.id === action.payload[index].product.id
          );

          if (sameProductIdx !== -1) {
            state.cartItems[sameProductIdx].count +=
              action.payload[index].count;
          } else {
            state.cartItems = [...state.cartItems, action.payload[index]];
          }
        }
      }
      state.status = 'success';
    },
    removeCartItem: (state, action: PayloadAction<{ id: string }>) => {
      state.cartItems = state.cartItems.filter(
        (e) => e.product.id !== action.payload.id
      );
    },
    incrementCartItem: (state, action: PayloadAction<number>) => {
      const currentPC = state.cartItems[action.payload];
      const currentStock = currentPC.product.stock;
      const currentCount = currentPC.count;

      if (currentStock && currentStock > currentCount + 1) {
        state.cartItems[action.payload].count = currentCount + 1;

        state.status = 'updated';
      }
    },
    decrementCartItem: (state, action: PayloadAction<number>) => {
      const currentPC = state.cartItems[action.payload];
      const currentCount = currentPC.count;
      if (currentCount >= 1) {
        state.cartItems[action.payload].count = currentCount - 1;
        state.status = 'updated';
      }
    },
    setUpdatedCartState: (state) => {
      state.status = 'updated';
    },

    setInitialCartState: (state) => {
      state.cartItems = [];
      state.status = 'initial';
    },
  },
});

export const {
  putCartItem,
  addCartItem,
  removeCartItem,
  incrementCartItem,
  decrementCartItem,
  setUpdatedCartState,
  setInitialCartState,
} = cartSlice.actions;

export const selectHomeProducts = (state: AppState) => state.home.products;

export default cartSlice.reducer;
