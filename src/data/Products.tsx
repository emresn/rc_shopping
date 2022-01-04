import { ProductModel } from '@/model/ProductModel';

import { Electronics, Smartphones } from './categories';

export const exampleProduct: ProductModel = {
  category: Electronics,
  createdAt: new Date('2022-01-02T02:51:17.289682+00:00'),
  description: `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id ultricies augue. Aenean feugiat lobortis ipsum, nec mattis nulla rutrum quis. 
Sed tempor nec ante sit amet ultricies. Curabitur a elit suscipit, ultrices ipsum in, vestibulum magna. 

Duis finibus posuere diam, scelerisque pharetra nibh mollis in. 
In vel leo quis quam rutrum rhoncus. Etiam sit amet urna in felis egestas elementum scelerisque laoreet nisi. Interdum et malesuada fames ac ante ipsum primis in faucibus. 
Sed ac euismod nunc. Duis ut aliquam diam. Vivamus viverra faucibus dolor et lobortis. Donec gravida posuere felis, id lacinia augue lobortis sit amet. 
Suspendisse eu blandit diam, nec ultrices urna. Nullam finibus dictum interdum. Aenean interdum sodales odio, in blandit arcu tristique at.  
  `,
  id: '85802213-6913-4693-bb44-e1edf4fcfbdc',
  key: 'transistors552',
  isActive: true,
  images: [
    {
      id: '3',
      path: 'https://res.cloudinary.com/dc0uxmplw/image/upload/v1624813411/products/electronics1_ig5mgl.jpg',
      productId: 'd6e79181-2c6a-4be4-9c82-91c1ac3d83ad',
    },
    {
      id: '4',
      path: 'https://res.cloudinary.com/dc0uxmplw/image/upload/v1624813411/products/transistors_rnpto7.jpg',
      productId: 'd6e79181-2c6a-4be4-9c82',
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
  description: `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quis cursus nulla, vitae rutrum massa. Donec euismod purus quis tellus venenatis, a dictum ante rutrum. Morbi bibendum elit mauris, vitae porta nisi sollicitudin vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin sed vehicula est. Donec eget justo nec massa hendrerit ultricies non sit amet ligula. Sed vitae pellentesque diam. Maecenas ac nunc mi. Donec ut felis sem. Praesent et iaculis felis. Aenean elementum viverra arcu, id elementum lectus tempor et. Ut in purus eu ligula dictum malesuada. Etiam semper, nisl vel cursus gravida, libero magna tempor mauris, sed egestas justo lacus eu nunc. Sed at ipsum mollis, pharetra nulla non, commodo mauris. In imperdiet scelerisque vulputate.

Suspendisse ultrices porttitor justo, ut ornare quam bibendum maximus. Phasellus lectus sem, cursus eget sapien eget, feugiat condimentum diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Quisque dapibus, tortor ac vehicula bibendum, purus augue ultricies nibh, sit amet interdum neque neque id metus. Morbi condimentum justo quis velit elementum, ut blandit odio condimentum. Aenean facilisis ex vitae lacus congue maximus. Aenean eget urna dignissim, sollicitudin orci sed, elementum felis. Nullam consectetur erat eu orci auctor euismod. Curabitur lobortis lorem in tortor varius sagittis. Integer molestie sem ex, vel condimentum mi rutrum vel.
  
  `,
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
