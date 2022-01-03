import { CategoryModel } from '@/model/CategortModel';
import {
  faEnvelope,
  faSignOutAlt,
  faThLarge,
  faUserAlt,
} from '@fortawesome/free-solid-svg-icons';

export const userMenuItems: CategoryModel[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: faThLarge,
  },

  {
    name: 'Messages',
    href: '/dashboard/messages',
    icon: faEnvelope,
  },
  {
    name: 'My Profile',
    href: '/dashboard/profile-informations',
    icon: faUserAlt,
  },
  {
    name: 'Signout',
    href: '/api/auth/logout',
    icon: faSignOutAlt,
  },
];
