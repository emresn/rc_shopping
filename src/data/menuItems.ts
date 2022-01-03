import {
  faEnvelope,
  faHome,
  faInfoCircle,
  faQuestionCircle,
  faSignOutAlt,
  faThLarge,
  faUserAlt,
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
    href: '/help-center',
    icon: faQuestionCircle,
  },
  {
    title: 'Privacy Policy',
    href: '/privacy-policy',
    icon: faUserShield,
  },
  {
    title: 'About Us',
    href: '/about-us',
    icon: faInfoCircle,
  },
  {
    title: 'Counter',
    href: '/counter',
    icon: faInfoCircle,
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
    icon: faThLarge,
    isExpanded: true,
    subCategories: productsMenuItems,
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
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: faThLarge,
  },

  {
    title: 'Messages',
    href: '/dashboard/messages',
    icon: faEnvelope,
  },
  {
    title: 'My Profile',
    href: '/dashboard/profile-informations',
    icon: faUserAlt,
  },
  {
    title: 'More',
    href: '/more',
    icon: faThLarge,
    isExpanded: true,
    subCategories: moreMenuItems,
  },
  {
    title: 'Signout',
    href: '/api/auth/logout',
    icon: faSignOutAlt,
  },
];
