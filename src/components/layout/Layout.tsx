import * as React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
}
