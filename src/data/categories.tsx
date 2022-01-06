import {
  faHeadphonesAlt,
  faKeyboard,
  faLaptop,
  faMicrochip,
  faMobileAlt,
  faMouse,
  faTv,
} from '@fortawesome/free-solid-svg-icons';

import { CategoryEnums } from '@/enums/categories';
import { CategoryModel } from '@/model/CategortModel';

export const Computers: CategoryModel = {
  name: CategoryEnums.computers,
  href: '/products/Computers',
  icon: faLaptop,
};

export const Smartphones: CategoryModel = {
  name: CategoryEnums.smartphones,
  href: '/products/Smartphones',
  icon: faMobileAlt,
};

export const Electronics: CategoryModel = {
  name: CategoryEnums.electronics,
  href: '/products/Electronics',
  icon: faMicrochip,
};

export const Keyboards: CategoryModel = {
  name: CategoryEnums.keyboards,
  href: '/products/Keyboards',
  icon: faKeyboard,
};

export const Mouses: CategoryModel = {
  name: CategoryEnums.mouses,
  href: '/products/Mouses',
  icon: faMouse,
};

export const Headsets: CategoryModel = {
  name: CategoryEnums.headsets,
  href: '/products/Headsets',
  icon: faHeadphonesAlt,
};
export const TVs: CategoryModel = {
  name: CategoryEnums.tvs,
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
