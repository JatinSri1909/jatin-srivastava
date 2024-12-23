import React from 'react';
import { NavLink } from './NavLink';
import { NAVIGATION_ITEMS } from './constants';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full px-6 py-3 
        border border-gray-200 dark:border-gray-800">
        <ul className="flex items-center gap-6">
          {NAVIGATION_ITEMS.map(({ id, label }) => (
            <NavLink key={id} href={`#${id}`}>
              {label}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};