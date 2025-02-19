/**
 * This code was generated by Builder.io.
 */
import React from 'react';
import { NavigationItemProps } from './types';

export const NavigationItem: React.FC<NavigationItemProps> = ({ icon, label, href, isActive = false }) => {
  return (
    <div 
      className={`flex overflow-hidden flex-col justify-center px-3 py-2 mt-6 max-w-full whitespace-nowrap w-[104px] ${isActive ? 'border-l-4 border-white font-medium' : ''}`}
      onClick={() => window.location.href = href}
      role="button"
      tabIndex={0}
      onKeyPress={(e) => {
        if (e.key === 'Enter') {
          window.location.href = href;
        }
      }}
    >
      <div className="flex flex-col w-full">
        <img loading="lazy" src={icon} alt={`${label} icon`} className="object-contain self-center w-6 aspect-square" />
        <div className="mt-2">{label}</div>
      </div>
    </div>
  );
};