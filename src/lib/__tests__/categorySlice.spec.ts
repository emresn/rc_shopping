import { Keyboards, Mouses } from '@/data/categories';
import { ProductsExampleList } from '@/data/Products';
import { allProductsRequestOptions } from '@/data/requestOptionsData';

import categoryReducer, {
  CategoryState,
  updateProducts,
} from '@/features/category/categorySlice';
import { generateHrefFromCategoryModel } from '@/helpers/generateHrefFromCategoryModel';
import { generateRequestOptions } from '@/helpers/generateRequestOptions';
import { CategoryModelFromString } from '@/model/CategortModel';

describe('counter reducer', () => {
  const initialState: CategoryState = {
    products: [],
    filterOptions: allProductsRequestOptions,
    status: 'initial',
  };

  it('should handle updateProducts', () => {
    const actual = categoryReducer(
      initialState,
      updateProducts(ProductsExampleList)
    );
    expect(actual.products).toEqual(ProductsExampleList);
  });

  it('should handle CategoryModel From String', () => {
    const categoryModel = CategoryModelFromString('Computers');
    expect(categoryModel?.name).toEqual('Computers');
  });

  it('should handle generate Href From CategoryModel', () => {
    const href = generateHrefFromCategoryModel(Mouses);
    expect(href).toEqual('../api/products/created_at&desc/category&Mouses');
  });

  it('should handle generate RequestOptions from Href', () => {
    const options = generateRequestOptions(
      '../api/products/created_at&desc/category&Keyboards'
    );
    expect(options.category).toEqual(Keyboards.name);
  });
});
