import * as React from 'react';

// import FlashMessage from '../FlashMessage';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='inline-flex flex-col flex-auto p-4 mx-auto md:container'>
        {/* <FlashMessage /> */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
