import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/router';
import React from 'react';

import PrimaryLink from '@/components/links/PrimaryLink';

import { MenuItemModel } from '@/model/MenuItemModel';

import {
  dashboardHomeMenuItem,
  dashboardOrderItems,
  dashboardProfileItems,
  logOutHomeMenuItem,
  notificationMenuItem,
} from '../../data/dashboardItems';

interface Props {
  isExpanded: boolean;
}
const LeftMenu = ({ isExpanded }: Props) => {
  return (
    <>
      <div className='inline-flex flex-col w-full'>
        <h4 className={`${isExpanded ? '' : 'hidden'}`}>My Orders</h4>
        <div
          className={`${
            !isExpanded ? 'pt-8 gap-6' : 'gap-2'
          } flex-col  inline-flex ml-2`}
        >
          {[...dashboardOrderItems, notificationMenuItem].map((e, idx) => (
            <BuildLink onlyIcon={!isExpanded} item={e} key={idx} />
          ))}
        </div>

        <hr className='border-b-gray-300 mt-4 mr-4 border shadow-md' />

        {isExpanded ? <h4>My Profile</h4> : <div className='p-2'></div>}
        <div
          className={`${
            !isExpanded ? 'pt-8 gap-6' : 'gap-2'
          } flex-col  inline-flex ml-2`}
        >
          {[
            ...dashboardProfileItems,
            dashboardHomeMenuItem,
            logOutHomeMenuItem,
          ].map((e, idx) => (
            <BuildLink onlyIcon={!isExpanded} item={e} key={idx} />
          ))}
        </div>
        <div className='flex-auto'></div>
      </div>
    </>
  );
};

interface LinkProps {
  item: MenuItemModel;
  onlyIcon?: boolean;
}

const BuildLink = ({ item, onlyIcon = false }: LinkProps) => {
  const router = useRouter();

  const active = (e: string) =>
    router.pathname === `/dashboard${e}`
      ? 'font-bold underline text-primary-500'
      : '';

  return (
    <div className={`${onlyIcon && 'scale-150'} flex-row gap-3 inline-flex`}>
      <PrimaryLink className={item.className} href={`/dashboard${item.href}`}>
        <FontAwesomeIcon icon={item.icon} />
      </PrimaryLink>
      {!onlyIcon && (
        <PrimaryLink
          className={`font-medium text-black ${active(item.href)}`}
          href={`/dashboard${item.href}`}
          key={item.title}
        >
          <span>{item.title}</span>
        </PrimaryLink>
      )}
    </div>
  );
};

export default LeftMenu;
