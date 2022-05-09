import React from 'react';
import * as SVG from './svg';
import * as Style from './styled';

export type IconType = keyof typeof SVG;
interface IconProps {
  icon: IconType;
  size: string;
  color?: string;
  propagation?: boolean;
  onClick?: () => void;
}

function Icon({ icon, size, color = '#000', propagation = true, onClick }: IconProps) {
  const SvgIcon = SVG[icon];

  const handleClickEvent = (event: React.MouseEvent<HTMLDivElement>) => {
    if (propagation) event.stopPropagation();
    if (onClick) onClick();
  };

  return (
    <Style.IconWrapper size={size} onClick={handleClickEvent}>
      <SvgIcon color={color} />
    </Style.IconWrapper>
  );
}

export default Icon;
