import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { initialRequestOptions } from '@/data/requestOptionsData';

import { ProductListFromJson, ProductModel } from '@/model/ProductModel';
import { RequestOptions } from '@/model/RequestOptions';
import { AppState } from '@/redux/store';

export interface HomeState {
  products: ProductModel[];
  filterOptions: RequestOptions;
  status: 'initial' | 'loading' | 'failed' | 'updated';
}

const initialState: HomeState = {
  products: [],
  filterOptions: initialRequestOptions,
  status: 'initial',
};

/* eslint-disable */
export const homeProductsAsync = createAsyncThunk(
  'HomeState/fetchProducts',
  async () => {
    const response = await fetch('../api/products').then((data) => data.json());

    const jsonData: Array<{ [key: string]: any }> =
      response.data.data.product_product;
    return ProductListFromJson(jsonData);
  }
);
/* eslint-enable */

export const homeSlice = createSlice({
  name: 'HomeState',
  initialState,
  reducers: {
    update: (state, action: PayloadAction<ProductModel[]>) => {
      state.products = action.payload;
    },
    updateOptions: (state, action: PayloadAction<RequestOptions>) => {
      state.filterOptions = action.payload;
    },
    setInitial: (state) => {
      state.products = [];
      state.status = 'initial';
      state.filterOptions = initialRequestOptions;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(homeProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(homeProductsAsync.fulfilled, (state, action) => {
        state.status = 'updated';
        state.products = action.payload;
      })
      .addCase(homeProductsAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { update, setInitial, updateOptions } = homeSlice.actions;

export const selectHomeProducts = (state: AppState) => state.home.products;

export default homeSlice.reducer;
