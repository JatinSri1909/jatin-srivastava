import React from 'react';
import { NavLink } from './NavLink';
import { NAVIGATION_ITEMS } from './constants';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-fit px-2 md:px-0">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm rounded-[5px] px-3 md:px-6 py-2 md:py-3 
        border border-gray-200 dark:border-slate-800">
        <ul className="flex items-center justify-center gap-3 md:gap-6">
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