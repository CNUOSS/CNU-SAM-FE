import React, { useState } from 'react';
import * as Style from './styled';

interface InputFileProps {
  label: string;
  onChange: (event: string | ArrayBuffer | null) => void;
}

function InputFile({ label, onChange }: InputFileProps) {
  const [filename, setFileName] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    reader.onload = () => onChange(reader.result);
    if (event.target.files?.length) {
      setFileName(event.target.files[0].name);
      reader.readAsBinaryString(event.target.files[0]);
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
