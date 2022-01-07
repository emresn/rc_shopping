import { ProductModel } from './ProductModel';

export type ProductCountModel = {
  id: string;
  product: ProductModel;
  count: number;
};

export function ProductCountModelFromProduct(
  product: ProductModel,
  count: number,
  id?: string
) {
  const productCount: ProductCountModel = {
    product: product,
    count: count,
    id: id ? id : `cart_${product.id}`,
  };
  return productCount;
}
