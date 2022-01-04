import {
  useUser,
  withPageAuthRequired,
} from '@auth0/nextjs-auth0/dist/frontend';
import React from 'react';

import { orderData } from '@/data/orderData';

import ErrorMessage from '@/components/ErrorMessage';
import Loading from '@/components/Loading';

import DashboardLayout from '@/features/dashboard/DashboardLayout';
import OrderRowView from '@/features/dashboard/OrderRowView';

const CompletedOrdersView = () => {
  const { user, isLoading } = useUser();

  return (
    <>
      {isLoading && <Loading />}
      {user && (
        <DashboardLayout title='Completed Orders'>
          {[orderData, orderData].map((e, idx) => (
            <OrderRowView key={idx} order={orderData} />
          ))}
        </DashboardLayout>
      )}
    </>
  );
};

/* eslint-disable */
export default withPageAuthRequired(CompletedOrdersView, {
  onRedirecting: () => {
    return <Loading />;
  },
  onError: (error) => {
    return <ErrorMessage>{error.message}</ErrorMessage>;
  },
});
/* eslint-enable */
