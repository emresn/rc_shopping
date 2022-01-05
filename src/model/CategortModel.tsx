import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import {
  Computers,
  Electronics,
  Headsets,
  Keyboards,
  Mouses,
  Smartphones,
  TVs,
} from '@/data/categories';

export type CategoryModel = {
  name: string;
  href: string;
  icon: IconDefinition;
};

export function CategoryModelFromString(name: string) {
  switch (name) {
    case 'Computers':
      return Computers;
    case 'Smartphones':
      return Smartphones;
    case 'Electronics':
      return Electronics;
    case 'Keyboards':
      return Keyboards;
    case 'Mouses':
      return Mouses;
    case 'Headsets':
      return Headsets;
    case 'TVs':
      return TVs;

    default:
      return Computers;
  }
}
