import React from 'react';
import { IconProps } from './types';

function Desc({ color }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path fill={color} d="M12 3.202l3.839 4.798h-7.678l3.839-4.798zm0-3.202l-8 10h16l-8-10zm8 14h-16l8 10 8-10z" />
    </svg>
  );
}

export default Desc;
