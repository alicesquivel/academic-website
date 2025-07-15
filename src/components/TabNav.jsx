import React, { useEffect, useState } from 'react';
import { cn } from '../lib/utils';

const TabNav = ({ activeTab, onTabChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const tabs = ['About', 'Research', 'Publications', 'Experience'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={cn(
      'sticky top-0 z-40 w-full border-b transition-shadow duration-200',
      'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60',
      isScrolled && 'shadow-sm'
    )}>
      <nav className="container flex justify-center space-x-8 py-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.toLowerCase();
          return (
            <button
              key={tab}
              onClick={() => onTabChange(tab.toLowerCase())}
              className={cn(
                'group relative px-3 py-3 text-sm font-medium transition-colors',
                isActive
                  ? 'text-foreground'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              {tab}
              <span
                className={cn(
                  'absolute inset-x-0 -bottom-px h-px transition-all',
                  isActive
                    ? 'bg-primary h-0.5'
                    : 'bg-foreground/0 group-hover:bg-foreground/40 h-px'
                )}
              />
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default TabNav;