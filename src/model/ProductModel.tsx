import { CategoryModel } from './CategortModel';
import { ImageModel } from './ImageModel';

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
  createdAt: Date;
  updatedAt?: Date;
};
