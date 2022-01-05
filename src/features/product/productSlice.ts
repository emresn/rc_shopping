import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ProductListFromJson, ProductModel } from '@/model/ProductModel';
import { AppState } from '@/redux/store';

export interface ProductState {
  data: ProductModel[];
  status: 'initial' | 'loading' | 'failed' | 'updated';
}

const initialState: ProductState = {
  data: [],
  status: 'initial',
};

/* eslint-disable */
export const productsAsync = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await fetch('./api/products/limit&8').then((data) =>
      data.json()
    );
    const jsonData: Array<{ [key: string]: any }> =
      response.data.data.product_product;
    return ProductListFromJson(jsonData);
  }
);
/* eslint-enable */

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<ProductModel[]>) => {
      state.data = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(productsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(productsAsync.fulfilled, (state, action) => {
        state.status = 'updated';
        state.data = action.payload;
      });
  },
});

export const { update } = productSlice.actions;

export const selectProducts = (state: AppState) => state.products.data;

export default productSlice.reducer;
