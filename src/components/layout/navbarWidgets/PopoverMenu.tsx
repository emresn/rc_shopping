import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { Fragment } from 'react';

import { MenuItemModel } from '@/model/MenuItemModel';

interface Props {
  menuItem: MenuItemModel;
}

export const PopoverMenu = ({ menuItem }: Props) => {
  return (
    <Popover className='relative'>
      {({ open }) => (
        <>
          <Popover.Button
            className={
              'font-medium group inline-flex items-center rounded-md  hover:text-gray-600'
            }
          >
            <div className='flex flex-row items-center'>
              <span className='mr-2 text-indigo-700'>
                <FontAwesomeIcon className='w-5' icon={menuItem.icon} />
              </span>
              <span>{menuItem.title}</span>

              <span className='ml-2'>
                <FontAwesomeIcon className='' icon={faChevronDown} />
              </span>
            </div>
          </Popover.Button>

          <Transition
            show={open}
            as={Fragment}
            enter='transition ease-out duration-200'
            enterFrom='opacity-0 translate-y-1'
            enterTo='opacity-100 translate-y-0'
            leave='transition ease-in duration-150'
            leaveFrom='opacity-100 translate-y-0'
            leaveTo='opacity-0 translate-y-1'
          >
            <Popover.Panel
              static
              className='absolute z-10 px-2 mt-3 -ml-4 w-64 max-w-md transform sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2'
            >
              <div className='overflow-hidden rounded-lg ring-1 ring-black ring-opacity-5 shadow-lg'>
                <div className='grid relative bg-white'>
                  {menuItem.subCategories?.map((subItem) => (
                    <BuildSubMenu key={subItem.title} item={subItem} />
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

interface SubMenuProps {
  item: MenuItemModel;
}

const BuildSubMenu = ({ item }: SubMenuProps) => {
  return (
    <Popover.Button key={'item.title'}>
      <Link href={item.href}>
        <a className='flex items-start px-6 py-2 hover:bg-gray-200'>
          <div className='w-5'>
            <FontAwesomeIcon
              icon={item.icon}
              className='flex-shrink-0 w-6 h-6 text-indigo-600'
              aria-hidden='true'
            />
          </div>
          <div className='ml-4'>
            <p className='text-base font-medium text-gray-900'>{item.title}</p>
          </div>
        </a>
      </Link>
    </Popover.Button>
  );
};
