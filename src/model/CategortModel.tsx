import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { categories, Computers } from '@/data/categories';

export type CategoryModel = {
  name: string;
  href: string;
  icon: IconDefinition;
};

export function CategoryModelFromString(name: string) {
  const idx = categories.findIndex((e) => e.name == name);

  if (idx != null && idx != -1) {
    return categories[idx];
  } else {
    return Computers;
  }
}
