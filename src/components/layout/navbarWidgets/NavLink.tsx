import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import { MenuItemModel } from '@/model/MenuItemModel';

import { PopoverMenu } from './PopoverMenu';

interface Props {
  menuItem: MenuItemModel;
}

export const NavLink = ({ menuItem }: Props) => {
  return menuItem.isExpanded ? (
    <PopoverMenu menuItem={menuItem} />
  ) : (
    <Link href={menuItem.href}>
      <a className='text-base font-medium'>
        <div className='inline-flex flex-row items-center text-base hover:text-red-700'>
          <span className='mr-2 text-indigo-700'>
            <FontAwesomeIcon className='w-5' icon={menuItem.icon} />
          </span>
          <span className=''>{menuItem.title}</span>
        </div>
      </a>
    </Link>
  );
};
