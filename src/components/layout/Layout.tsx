import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';

import { Footer } from './Footer';
import { Navbar } from './Navbar';
import MobileMenuView from './sub/mobileMenu';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuActive, setMobileMenu] = useState(false);

  return (
    <div className='flex flex-col min-h-screen'>
      <MobileMenuView
        isMobileMenuActive={isMobileMenuActive}
        setMobileMenu={setMobileMenu}
      />
      <Navbar
        setMobileMenu={setMobileMenu}
        isMobileMenuActive={isMobileMenuActive}
      />
      <div className='inline-flex flex-col flex-auto p-4 mx-auto w-full md:container'>
        <Toaster position='top-right' />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
