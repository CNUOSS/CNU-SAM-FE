import React, { useState } from 'react';
import * as Style from './styled';

interface InputFileProps {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputFile({ label, onChange }: InputFileProps) {
  const [filename, setFileName] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      setFileName(event.target.files[0].name);
      onChange(event);
    }
  };

  return (
    <Style.InputWrapper>
      <Style.Label>{label}</Style.Label>
      <Style.InputBox>{filename}</Style.InputBox>
      <Style.Input data-testid="inputfile" id="inputfile" onChange={handleFileChange} type="file" />
      <Style.LabelButton htmlFor="inputfile">Upload</Style.LabelButton>
    </Style.InputWrapper>
  );
}

export default InputFile;
