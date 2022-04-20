import React from 'react';
import * as Style from './styled';

export type ButtonType = 'secondary' | 'warning';

interface ButtonProps {
  children: any;
  theme: ButtonType;
  onClick: () => void;
}

function Button({ children, theme, onClick }: ButtonProps) {
  return (
    <Style.Button data-testid="button-test" btnTheme={theme} onClick={onClick}>
      {children}
    </Style.Button>
  );
}

export default Button;
