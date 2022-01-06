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

import { CategoryEnums } from '@/enums/categories';

export type CategoryModel = {
  name: string;
  href: string;
  icon: IconDefinition;
};

export function CategoryModelFromString(name: string) {
  switch (name) {
    case CategoryEnums.computers:
      return Computers;
    case CategoryEnums.smartphones:
      return Smartphones;
    case CategoryEnums.electronics:
      return Electronics;
    case CategoryEnums.keyboards:
      return Keyboards;
    case CategoryEnums.mouses:
      return Mouses;
    case CategoryEnums.headsets:
      return Headsets;
    case CategoryEnums.tvs:
      return TVs;

    default:
      return Computers;
  }
}
