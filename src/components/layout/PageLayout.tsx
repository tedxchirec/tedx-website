'use client';

import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  showNavigation?: boolean;
  backgroundColor?: string;
  className?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  showNavigation = true,
  backgroundColor = 'bg-black',
  className = ''
}) => {
  return (
    <div className={`min-h-screen text-white relative overflow-hidden flex flex-col ${backgroundColor} ${className}`}>
      {showNavigation && <Navigation />}
      <div className="flex-1 flex flex-col">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default PageLayout;
