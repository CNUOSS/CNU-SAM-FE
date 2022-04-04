import React from 'react';
import * as SVG from './svg';

type IconType = keyof typeof SVG;
interface IconProps {
  icon: IconType;
}

function Icon({ icon }: IconProps) {
  const SvgIcon = SVG[icon];

  return <SvgIcon />;
}

export default Icon;
