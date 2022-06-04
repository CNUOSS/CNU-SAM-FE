import React from 'react';
import * as Style from './styled';

export type ToggleDirection = 'left' | 'right';

interface ToggleSwitchProps {
  leftText: string;
  rightText: string;
  toggleSwitch: (toggled: ToggleDirection) => void;
}

function ToggleSwitch({ leftText, rightText, toggleSwitch }: ToggleSwitchProps) {
  const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    toggleSwitch(event.target.checked ? 'right' : 'left');
  };

  return (
    <Style.Container>
      <Style.Selector>{leftText}</Style.Selector>
      <Style.Label>
        <Style.Input type="checkbox" onChange={changeInput} />
        <Style.Span />
      </Style.Label>
      <Style.Selector>{rightText}</Style.Selector>
    </Style.Container>
  );
}

export default ToggleSwitch;
