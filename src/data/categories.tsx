import {
  faHeadphonesAlt,
  faKeyboard,
  faLaptop,
  faMicrochip,
  faMobileAlt,
  faMouse,
  faTv,
} from '@fortawesome/free-solid-svg-icons';

import { CategoryModel } from '@/model/CategortModel';

export const Computers: CategoryModel = {
  name: 'Computers',
  href: '/products/computers',
  icon: faLaptop,
};

export const Smartphones: CategoryModel = {
  name: 'Smartphones',
  href: '/products/smartphones',
  icon: faMobileAlt,
};

export const Electronics: CategoryModel = {
  name: 'Electronics',
  href: '/products/electronics',
  icon: faMicrochip,
};

export const Keyboards: CategoryModel = {
  name: 'Keyboards',
  href: '/products/keyboards',
  icon: faKeyboard,
};

export const Mouses: CategoryModel = {
  name: 'Mouses',
  href: '/products/mouses',
  icon: faMouse,
};

export const Headsets: CategoryModel = {
  name: 'Headsets',
  href: '/products/headsets',
  icon: faHeadphonesAlt,
};
export const TVs: CategoryModel = {
  name: 'TVs',
  href: '/products/tvs',
  icon: faTv,
};

export const categories: CategoryModel[] = [
  Computers,
  Smartphones,
  Electronics,
  Keyboards,
  Mouses,
  Headsets,
  TVs,
];
