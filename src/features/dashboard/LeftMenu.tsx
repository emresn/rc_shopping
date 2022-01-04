import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';

import PrimaryLink from '@/components/links/PrimaryLink';

import { MenuItemModel } from '@/model/MenuItemModel';

import {
  dashboardHomeMenuItem,
  dashboardOrderItems,
  dashboardProfileItems,
  notificationMenuItem,
} from '../../data/dashboardItems';

const LeftMenu = () => {
  return (
    <>
      <div className='inline-flex flex-col w-full'>
        <h4>My Orders</h4>
        <div className='inline-flex flex-col gap-2 ml-2'>
          {[...dashboardOrderItems, notificationMenuItem].map((e, idx) => (
            <BuildLink item={e} key={idx} />
          ))}
        </div>

        <hr className='border-b-gray-300 mt-4 mr-4 border shadow-md' />

        <h4>My Profile</h4>
        <div className='inline-flex flex-col gap-2 ml-2'>
          {[...dashboardProfileItems, dashboardHomeMenuItem].map((e, idx) => (
            <BuildLink item={e} key={idx} />
          ))}
        </div>
        <div className='h-32'></div>
      </div>
    </>
  );
};

interface LinkProps {
  item: MenuItemModel;
}

const BuildLink = ({ item }: LinkProps) => {
  const router = useRouter();

  const active = (e: string) =>
    router.pathname === `/dashboard${e}`
      ? 'font-bold underline text-primary-500'
      : '';

  return (
    <div className='inline-flex flex-row gap-2'>
      <span className={item.className}>
        <FontAwesomeIcon icon={item.icon} />
      </span>
      <PrimaryLink
        className={`font-medium text-black ${active(item.href)}`}
        href={`/dashboard${item.href}`}
        key={item.title}
      >
        <span>{item.title}</span>
      </PrimaryLink>
    </div>
  );
};

export default LeftMenu;
