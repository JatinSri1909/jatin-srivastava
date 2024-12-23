import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ children, ...props }) => {
  return (
    <li>
      <a
        {...props}
        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 
          dark:hover:text-gray-100 transition-colors"
      >
        {children}
      </a>
    </li>
  );
};