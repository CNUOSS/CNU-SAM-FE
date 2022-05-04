import React from 'react';
import Button from '../Button';
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
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) onSubmit(event);
  };

  return (
    <Cover onSubmit={onSubmit ? handleSubmit : undefined}>
      <Style.InputList>{children}</Style.InputList>
      {buttonText ? <Button>{buttonText}</Button> : <></>}
    </Cover>
  );
}

export default TabForm;
