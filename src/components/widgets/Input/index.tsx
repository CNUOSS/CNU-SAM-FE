import React from 'react';
import * as Style from './styled';

interface InputProps {
  value: string;
  label?: string;
  width?: string;
  type?: 'text' | 'password' | 'email' | 'date';
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface CoverProps {
  children: React.ReactElement[];
  label?: string;
}

const Cover = ({ children, label }: CoverProps) =>
  label ? <Style.InputWrapper>{children}</Style.InputWrapper> : <>{children}</>;

function Input({ value, label, width, type = 'text', onChange }: InputProps) {
  return (
    <Cover label={label}>
      {label ? <Style.Label htmlFor={label}>{label}</Style.Label> : <></>}
      <Style.Input id={label} width={width} type={type} value={value} onChange={onChange} />
    </Cover>
  );
}

export default Input;
