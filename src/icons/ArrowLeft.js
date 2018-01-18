import React from 'react';

const ArrowLeft = ({ className, width, height }) => (
  <svg
    className={className}
    width={width || '100%'}
    height={height || '100%'}
    fill="transparent"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M20 12H4M10 18l-6-6 6-6" />
  </svg>
);

export default ArrowLeft;
