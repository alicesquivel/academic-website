import React, { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className={cn(
      'sticky top-0 z-50 w-full border-b transition-all duration-200',
      'bg-white/80 backdrop-blur-sm',
      isScrolled && 'shadow-sm'
    )}>
      <nav className="container px-4 py-2">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-end">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          'md:hidden overflow-hidden transition-all duration-300 ease-in-out',
          isMenuOpen ? 'max-h-64' : 'max-h-0'
        )}>
          <div className="py-2 space-y-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.toLowerCase();
              return (
                <button
                  key={tab}
                  onClick={() => {
                    onTabChange(tab.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                  className={cn(
                    'w-full px-4 py-2 text-left text-sm font-medium transition-all duration-200',
                    isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  )}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex justify-center space-x-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.toLowerCase();
            return (
              <button
                key={tab}
                onClick={() => onTabChange(tab.toLowerCase())}
                className={cn(
                  'group relative px-3 py-2 text-sm font-medium transition-all duration-200',
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                )}
              >
                {tab}
                <span
                  className={cn(
                    'absolute bottom-0 left-0 w-full h-0.5 rounded-full transition-all duration-200 transform',
                    isActive
                      ? 'bg-blue-600 scale-x-100'
                      : 'bg-blue-600/0 scale-x-0 group-hover:scale-x-100 group-hover:bg-blue-600/40'
                  )}
                />
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default TabNav;