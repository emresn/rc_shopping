import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';

import ErrorMessage from '@/components/ErrorMessage';

import DashboardLayout from '@/features/dashboard/DashboardLayout';
import DashboardMain from '@/features/dashboard/DashboardMain';

import Loading from '../../components/Loading';

const Dashboard = () => {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <DashboardLayout title='Dashboard'>
          <DashboardMain />
        </DashboardLayout>
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
