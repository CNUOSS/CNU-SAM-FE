import React from 'react';
import { IconProps } from './types';

function RightChevron({ color }: IconProps) {
  return (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
      <path fill={color} d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
    </svg>
  );
}

export default RightChevron;
