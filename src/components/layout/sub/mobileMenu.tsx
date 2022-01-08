import { useUser } from '@auth0/nextjs-auth0';

import {
  guestMenuItems,
  moreMenuItems,
  signInItem,
  userMenuItems,
  userProfileItem,
} from '@/data/menuItems';

import PrimaryLink from '@/components/links/PrimaryLink';

interface MobileMenuViewProps {
  isMobileMenuActive: boolean;
  setMobileMenu: (value: boolean) => void;
}

const MobileMenuView = ({
  isMobileMenuActive,
  setMobileMenu,
}: MobileMenuViewProps) => {
  const { user } = useUser();
  const mobileMenuItems = user
    ? [...userMenuItems, ...moreMenuItems, userProfileItem]
    : [...guestMenuItems, ...moreMenuItems, signInItem];

  return (
    <div
      className={`bg-primary-900  fixed h-full -left-3/4  overflow-x-hidden top-0  transition w-3/4 z-20  ${
        isMobileMenuActive ? 'translate-x-full' : '-translate-x-full'
      }`}
    >
      <div className='relative mt-7 w-full text-center transition-transform'>
        <span className='block p-8 transition'>
          <div className='flex flex-col gap-20 justify-center items-center'>
            {mobileMenuItems.map(
              (e, idx) =>
                !e.isExpanded && (
                  <div onClick={() => setMobileMenu(false)}>
                    <PrimaryLink href={e.href} key={idx}>
                      <div
                        className='text-2xl font-medium text-gray-200'
                        key={idx}
                      >
                        <span> {e.title}</span>
                      </div>
                    </PrimaryLink>
                  </div>
                )
            )}
          </div>
        </span>
      </div>
    </div>
  );
};

export default MobileMenuView;
