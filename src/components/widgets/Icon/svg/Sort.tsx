import React from 'react';
import { IconProps } from './types';

function Sort({ color }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill={color} d="M12 0l8 10h-16l8-10zm8 14h-16l8 10 8-10z" />
    </svg>
  );
}

export default Sort;
