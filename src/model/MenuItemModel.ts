import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { CategoryModel } from './CategortModel';

export type MenuItemModel = {
  title: string;
  href: string;
  icon: IconDefinition;
  isExpanded?: boolean;
  subCategories?: MenuItemModel[];
};

export function MenuItemFromCategory(category: CategoryModel) {
  const menuItem: MenuItemModel = {
    href: category.href,
    icon: category.icon,
    title: category.name,
  };
  return menuItem;
}
