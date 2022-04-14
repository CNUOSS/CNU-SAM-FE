import React from 'react';
import * as Style from './styled';

interface InputProps {
  value: string;
  label?: string;
  width?: string;
  type?: 'text' | 'password' | 'email';
  onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

function Input({ value, label, width, type = 'text', onChange }: InputProps) {
  if (!label) return <Style.Input id={label} width={width} type={type} value={value} onChange={onChange} />;
  return (
    <Style.InputWrapper>
      {label && <Style.Label htmlFor={label}>{label}</Style.Label>}
      <Style.Input id={label} width={width} type={type} value={value} onChange={onChange} />
    </Style.InputWrapper>
  );
}

export default Input;
