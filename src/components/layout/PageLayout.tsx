'use client';

import React from 'react';
import Navigation from './Navigation';

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
    <div className={`min-h-screen text-white relative overflow-hidden ${backgroundColor} ${className}`}>
      {showNavigation && <Navigation />}
      
      {/* Add padding-top to account for fixed navigation */}
      <div className={showNavigation ? 'pt-20' : ''}>
        {children}
      </div>
    </div>
  );
};

export default PageLayout;
