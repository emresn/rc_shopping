import { CategoryModel, CategoryModelFromString } from './CategortModel';
import { ImageModel, ImageModelsFromJson } from './ImageModel';
/* eslint-disable */

export type ProductModel = {
  id: string;
  key: string;
  category: CategoryModel;
  isActive: boolean;
  images?: ImageModel[];
  title: string;
  subtitle?: string;
  description?: string;
  price: number;
  discountPrice?: number;
  sales?: number;
  stock?: number;
  createdAt: string;
  updatedAt?: string;
};

export function ProductModelFromJson(json: { [key: string]: any }) {
  const product: ProductModel = {
    id: json['id'],
    key: json['key'],
    category: CategoryModelFromString(json['category_id']),
    isActive: json['isActive'],
    images: ImageModelsFromJson(json['images']),
    title: json['title'],
    subtitle: json['subtitle'],
    description: json['description'],
    price: json['price'],
    discountPrice: json['discount_price'],
    sales: json['sales'],
    stock: json['stock'],
    createdAt: `${json['created_at']}`,
    updatedAt: `${json['updated_at']}`,
  };

  return product;
}

export function ProductListFromJson(json: Array<{ [key: string]: any }>) {
  const items: ProductModel[] = [];

  for (let index = 0; index < json.length; index++) {
    const item = ProductModelFromJson(json[index]);
    items.push(item);
  }

  return items;
}
/* eslint-enable */
