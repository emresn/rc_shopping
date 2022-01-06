import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  allProductsRequestOptions,
  initialRequestOptions,
} from '@/data/requestOptionsData';

import { ProductListFromJson, ProductModel } from '@/model/ProductModel';
import { RequestOptions } from '@/model/RequestOptions';
import { AppState } from '@/redux/store';

export interface CategoryState {
  products: ProductModel[];
  filterOptions: RequestOptions;
  status: 'initial' | 'loading' | 'failed' | 'updated';
}

const initialState: CategoryState = {
  products: [],

  filterOptions: allProductsRequestOptions,
  status: 'initial',
};

/* eslint-disable */
export const categoryProductsAsync = createAsyncThunk(
  'CategoryState/fetchProducts',
  async (href: string) => {
    const response = await fetch(href).then((data) => data.json());

    const jsonData: Array<{ [key: string]: any }> =
      response.data.data.product_product;

    const options = response.options;
    return { products: ProductListFromJson(jsonData), options: options };
  }
);
/* eslint-enable */

export const categorySlice = createSlice({
  name: 'CategoryState',
  initialState,
  reducers: {
    updateProducts: (state, action: PayloadAction<ProductModel[]>) => {
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
      .addCase(categoryProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(categoryProductsAsync.fulfilled, (state, action) => {
        state.status = 'updated';
        state.products = action.payload.products;
        state.filterOptions = action.payload.options;
      })
      .addCase(categoryProductsAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { updateProducts, setInitial, updateOptions } =
  categorySlice.actions;

export const selectCategoryProducts = (state: AppState) =>
  state.category.products;

export default categorySlice.reducer;
