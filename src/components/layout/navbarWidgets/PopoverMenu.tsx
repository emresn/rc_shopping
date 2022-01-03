import { MenuItemModel } from '@/model/MenuItemModel';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover, Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { Fragment } from 'react';

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
              'font-medium group inline-flex items-center rounded-md hover:text-gray-900 focus:outline-none'
            }
          >
            <div className='flex flex-row items-center hover:text-black'>
              <span className='mr-2 text-indigo-700'>
                <FontAwesomeIcon className='w-5' icon={menuItem.icon} />
              </span>
              <span>{menuItem.title}</span>

              <span className='ml-2 text-gray-700'>
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
              className='-ml-4 absolute max-w-md mt-3 px-2 transform w-64 z-10 sm:px-0 lg:-translate-x-1/2 lg:left-1/2 lg:ml-0'
            >
              <div className='overflow-hidden ring-1 ring-black ring-opacity-5 rounded-lg shadow-lg'>
                <div className='bg-white grid relative'>
                  {menuItem.subCategories?.map((subItem) => (
                    <BuildSubMenu item={subItem} />
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
              className='flex-shrink-0 h-6 text-indigo-600 w-6'
              aria-hidden='true'
            />
          </div>
          <div className='ml-4'>
            <p className='font-medium text-base text-gray-900'>{item.title}</p>
          </div>
        </a>
      </Link>
    </Popover.Button>
  );
};
