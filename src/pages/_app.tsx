import { UserProvider } from '@auth0/nextjs-auth0';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import '@/styles/globals.css';

import Layout from '@/components/layout/Layout';

import store from '@/redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>{' '}
      </UserProvider>
    </Provider>
  );
}

export default MyApp;
