import React from 'react';
import * as SVG from './svg';

export type IconType = keyof typeof SVG;
interface IconProps {
  icon: IconType;
  color?: string;
}

function Icon({ icon, color = '#000' }: IconProps) {
  const SvgIcon = SVG[icon];

  return <SvgIcon color={color} />;
}

export default Icon;
