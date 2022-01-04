import {
  faCog,
  faHome,
  faInfoCircle,
  faMapMarkedAlt,
  faQuestionCircle,
  faSortNumericDown,
  faStore,
  faThLarge,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

import { MenuItemFromCategory, MenuItemModel } from '@/model/MenuItemModel';

import {
  Computers,
  Electronics,
  Headsets,
  Keyboards,
  Mouses,
  Smartphones,
  TVs,
} from './categories';

export const productsMenuItems: MenuItemModel[] = [
  MenuItemFromCategory(Computers),
  MenuItemFromCategory(Smartphones),
  MenuItemFromCategory(Electronics),
  MenuItemFromCategory(Keyboards),
  MenuItemFromCategory(Mouses),
  MenuItemFromCategory(Headsets),
  MenuItemFromCategory(TVs),
];

export const moreMenuItems: MenuItemModel[] = [
  {
    title: 'Help Center',
    href: '/more/help-center',
    icon: faQuestionCircle,
  },
  {
    title: 'Privacy Policy',
    href: '/more/privacy-policy',
    icon: faUserShield,
  },
  {
    title: 'About Us',
    href: '/more/about-us',
    icon: faInfoCircle,
  },
  {
    title: 'Counter',
    href: '/counter',
    icon: faSortNumericDown,
  },
  {
    title: 'Components',
    href: '/components',
    icon: faCog,
  },
];

export const guestMenuItems: MenuItemModel[] = [
  {
    title: 'Home',
    href: '/',
    icon: faHome,
  },
  {
    title: 'Products',
    href: '/products',
    icon: faStore,
    isExpanded: true,
    subCategories: productsMenuItems,
  },
  {
    title: 'Track Order',
    href: '/track-order',
    icon: faMapMarkedAlt,
  },
  {
    title: 'More',
    href: '/more',
    icon: faInfoCircle,
    isExpanded: true,
    subCategories: moreMenuItems,
  },
];

export const userMenuItems: MenuItemModel[] = [
  ...guestMenuItems,
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: faThLarge,
  },
];
