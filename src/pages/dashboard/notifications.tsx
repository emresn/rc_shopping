import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import React from 'react';

import ErrorMessage from '@/components/ErrorMessage';

import DashboardLayout from '@/features/dashboard/DashboardLayout';

import Loading from '../../components/Loading';

const NotificationsView = () => {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading && <Loading />}
      {user && <DashboardLayout title='Notifications'>{<></>}</DashboardLayout>}
    </>
  );
};
/* eslint-disable */
export default withPageAuthRequired(NotificationsView, {
  onRedirecting: () => {
    return <Loading />;
  },
  onError: (error) => {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  },
});
/* eslint-enable */
