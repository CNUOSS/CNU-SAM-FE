import React from 'react';
import * as SVG from './svg';
import * as Style from './styled';

export type IconType = keyof typeof SVG;
interface IconProps {
  icon: IconType;
  size: string;
  color?: string;
  onClick?: () => void;
}

function Icon({ icon, size, color = '#000', onClick }: IconProps) {
  const SvgIcon = SVG[icon];

  return (
    <Style.IconWrapper size={size} onClick={onClick}>
      <SvgIcon color={color} />
    </Style.IconWrapper>
  );
}

export default Icon;
