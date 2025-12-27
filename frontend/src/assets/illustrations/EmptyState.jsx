import React from 'react';

const EmptyVaultIllustration = ({ className }) => (
  <svg 
    viewBox="0 0 200 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
  >
    {/* Background Circle */}
    <circle cx="100" cy="100" r="80" fill="#F1F5F9" />
    
    {/* Floating Document 1 */}
    <rect x="70" y="60" width="40" height="55" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="2" />
    <path d="M78 75H102M78 85H102M78 95H90" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
    
    {/* Floating Document 2 (Offset) */}
    <rect x="95" y="85" width="40" height="55" rx="4" fill="white" stroke="#E2E8F0" strokeWidth="2" />
    <path d="M103 100H127M103 110H127M103 120H115" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" />
    
    {/* The "Empty" Magnifying Glass */}
    <circle cx="130" cy="70" r="15" fill="white" stroke="#94A3B8" strokeWidth="2" />
    <path d="M140 80L150 90" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default EmptyVaultIllustration;