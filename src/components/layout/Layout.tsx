import * as React from 'react';
import { Toaster } from 'react-hot-toast';

import { Footer } from './Footer';
import { Navbar } from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <div className='inline-flex flex-col flex-auto p-4 mx-auto w-full md:container'>
        <Toaster position='top-right' />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
