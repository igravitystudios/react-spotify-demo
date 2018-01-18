import React from 'react';

const Play = ({ className, width, height }) => (
  <svg
    className={className}
    width={width || '100%'}
    height={height || '100%'}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <circle fill="transparent" cx="12" cy="12" r="10" />
    <path d="M10 8l6 4-6 4V8z" />
  </svg>
);

export default Play;
