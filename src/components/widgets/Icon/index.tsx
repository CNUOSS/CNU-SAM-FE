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

  const handleClickEvent = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    if (onClick) onClick();
  };

  return (
    <Style.IconWrapper size={size} onClick={handleClickEvent}>
      <SvgIcon color={color} />
    </Style.IconWrapper>
  );
}

export default Icon;
