import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, ...props }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <li>
      <a
        {...props}
        href={href}
        onClick={handleClick}
        className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 
          dark:hover:text-gray-100 transition-colors"
      >
        {children}
      </a>
    </li>
  );
};