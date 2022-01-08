import {
  faAddressCard,
  faAngleDoubleRight,
  faBell,
  faCheck,
  faCog,
  faEnvelope,
  faSignOutAlt,
  faThLarge,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';

import { MenuItemModel } from '@/model/MenuItemModel';

export const notificationMenuItem: MenuItemModel = {
  icon: faBell,
  title: 'Notifications',
  className: 'text-yellow-500',
  href: '/notifications',
};

export const dashboardOrderItems: MenuItemModel[] = [
  {
    icon: faAngleDoubleRight,
    title: 'Active Orders',
    className: 'text-yellow-500',
    href: '/active-orders',
  },
  {
    icon: faCheck,
    title: 'Completed Orders',
    className: 'text-green-500',
    href: '/completed-orders',
  },

  {
    icon: faEnvelope,
    title: 'Messages',
    className: 'text-blue-500',
    href: '/messages',
  },
];

export const dashboardProfileItems: MenuItemModel[] = [
  {
    icon: faUserAlt,
    title: 'Profile Informations',
    className: 'text-red-500',
    href: '/profile-informations',
  },
  {
    icon: faAddressCard,
    title: 'Address Informations',
    className: 'text-purple-500',
    href: '/address-informations',
  },
  {
    icon: faCog,
    title: 'Account Settings',
    className: 'text-gray-500',
    href: '/account-settings',
  },
];

export const dashboardItems: MenuItemModel[] = [
  ...dashboardOrderItems,
  ...dashboardProfileItems,
];

export const dashboardHomeMenuItem: MenuItemModel = {
  title: 'Dashboard',
  href: '/',
  icon: faThLarge,
  className: 'text-primary-500 ',
};
export const logOutHomeMenuItem: MenuItemModel = {
  icon: faSignOutAlt,
  title: 'Logout',
  className: 'text-red-400',
  href: '../../api/auth/logout',
};
