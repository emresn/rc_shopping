import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';

import ErrorMessage from '@/components/ErrorMessage';

import DashboardMain from '@/features/dashboard/DashboardMain';
import LeftMenu from '@/features/dashboard/LeftMenu';

import Loading from '../../components/Loading';

const Dashboard = () => {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <>
          <div className='md:container md:mx-auto'>
            <div className='flex flex-col my-6 sm:flex-row'>
              <div className='w-full sm:w-1/5'>
                <LeftMenu />
              </div>
              <div className='px-4 mt-2 w-full border-0 sm:w-4/5 sm:border-l'>
                <DashboardMain />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
/* eslint-disable */
export default withPageAuthRequired(Dashboard, {
  onRedirecting: () => {
    return <Loading />;
  },
  onError: (error) => {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  },
});
/* eslint-enable */
