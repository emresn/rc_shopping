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
  href: '/products/Computers',
  icon: faLaptop,
};

export const Smartphones: CategoryModel = {
  name: 'Smartphones',
  href: '/products/Smartphones',
  icon: faMobileAlt,
};

export const Electronics: CategoryModel = {
  name: 'Electronics',
  href: '/products/Electronics',
  icon: faMicrochip,
};

export const Keyboards: CategoryModel = {
  name: 'Keyboards',
  href: '/products/Keyboards',
  icon: faKeyboard,
};

export const Mouses: CategoryModel = {
  name: 'Mouses',
  href: '/products/Mouses',
  icon: faMouse,
};

export const Headsets: CategoryModel = {
  name: 'Headsets',
  href: '/products/Headsets',
  icon: faHeadphonesAlt,
};
export const TVs: CategoryModel = {
  name: 'TVs',
  href: '/products/Tvs',
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
