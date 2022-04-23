import React from 'react';
import * as Style from './styled';

interface DefaultTextProps {
  label?: string;
  children: string;
}

interface CoverProps {
  children: React.ReactElement[];
  label?: string;
}

const Cover = ({ children, label }: CoverProps) =>
  label ? <Style.Wrapper>{children}</Style.Wrapper> : <>{children}</>;

function DefaultText({ label, children }: DefaultTextProps) {
  return (
    <Cover label={label}>
      {label ? <Style.Label>{label}</Style.Label> : <></>}
      <Style.TextBox>{children}</Style.TextBox>
    </Cover>
  );
}

export default DefaultText;
