import React from 'react';
import * as Style from './styled';

interface CheckboxProps {
  label: string;
  onClick: () => void;
}

function Checkbox({ label, onClick }: CheckboxProps) {
  return (
    <Style.InputWrapper>
      <Style.Input data-testid="checkbox" type="checkbox" id={`checkbox-${label}`} onClick={onClick} />
      <Style.Label htmlFor="checkbox">{label}</Style.Label>
    </Style.InputWrapper>
  );
}

export default Checkbox;
