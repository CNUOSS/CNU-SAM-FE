import React from 'react';
import * as Style from './styled';

interface TabFormProps {
  children: React.ReactElement | React.ReactElement[];
  buttonText?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

interface CoverProps {
  children: React.ReactElement[];
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Cover = ({ children, onSubmit }: CoverProps) =>
  onSubmit ? <Style.Form onSubmit={onSubmit}>{children}</Style.Form> : <Style.Container>{children}</Style.Container>;

function TabForm({ children, buttonText, onSubmit }: TabFormProps) {
  return (
    <Cover onSubmit={onSubmit}>
      <Style.InputList>{children}</Style.InputList>
      {buttonText ? <Style.SubmitButton>{buttonText}</Style.SubmitButton> : <></>}
    </Cover>
  );
}

export default TabForm;
