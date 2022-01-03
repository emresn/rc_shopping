import { ProductModel } from '@/model/ProductModel';
import { Electronics, Smartphones } from './categories';

export const exampleProduct: ProductModel = {
  category: Electronics,
  createdAt: new Date('2022-01-02T02:51:17.289682+00:00'),
  description: '3x Transistors 552',
  id: '85802213-6913-4693-bb44-e1edf4fcfbdc',
  key: 'transistors552',
  isActive: true,
  images: [
    {
      id: '3',
      path: 'https://res.cloudinary.com/dc0uxmplw/image/upload/v1624813411/products/electronics1_ig5mgl.jpg',
      productId: 'd6e79181-2c6a-4be4-9c82-91c1ac3d83ad',
    },
  ],
  title: '3x Transistors 552',
  subtitle: '3x Transistors 552 3x Transistors 552',
  price: 5.0,
  discountPrice: 3.99,
  sales: 75,
  stock: 1200,
};

export const exampleProduct2: ProductModel = {
  category: Smartphones,
  createdAt: new Date('2022-01-02T02:51:17.289682+00:00'),
  description: '3x Transistors 552',
  id: '56f58150-f0d2-463e-96cc-2abbbec511f3',
  key: 'smartphone',
  isActive: true,
  images: [
    {
      id: '8',
      path: 'https://res.cloudinary.com/dc0uxmplw/image/upload/v1624813412/products/smartphone3_wjsc1j.jpg',
      productId: '56f58150-f0d2-463e-96cc-2abbbec511f3',
    },
  ],
  title: 'Smartphone X',
  subtitle: 'Smartphone XSmartphone XSmartphone X',
  price: 420,
  discountPrice: 399.9,
  sales: 8,
  stock: 122,
};

export const ProductsExampleList: ProductModel[] = [
  exampleProduct,
  exampleProduct2,
  exampleProduct,
  exampleProduct2,
];
