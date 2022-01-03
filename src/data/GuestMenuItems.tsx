import { CategoryModel } from '@/model/CategortModel';
import {
  faHome,
  faInfoCircle,
  faQuestionCircle,
  faThLarge,
  faUserShield,
} from '@fortawesome/free-solid-svg-icons';

export const guestMenuItems: CategoryModel[] = [
  {
    name: 'Home',
    href: '/',
    icon: faHome,
  },
  {
    name: 'Products',
    href: '/products',
    icon: faThLarge,
  },
  {
    name: 'Help Center',
    href: '/help-center',
    icon: faQuestionCircle,
  },
  {
    name: 'Privacy Policy',
    href: '/privacy-policy',
    icon: faUserShield,
  },
  {
    name: 'About Us',
    href: '/about-us',
    icon: faInfoCircle,
  },
];
