import React, { useState } from 'react';
import SelfDropdown from '@components/widgets/SelfDropdown';
import useFetch from '@hooks/useFetch';

interface SelfDropdownContainerProps {
  label?: string;
  width: number;
  getUrl: string;
  inputWidth: number;
  responseConverter: (response: any) => string[];
  onChangeValue: (text: string) => void;
}

function SelfDropdownContainer({
  label,
  width,
  getUrl,
  inputWidth,
  responseConverter,
  onChangeValue,
}: SelfDropdownContainerProps) {
  const [value, setValue] = useState('');
  const { data, refetch } = useFetch<string[]>(
    getUrl,
    {},
    { enabled: false, suspense: false },
    { response: responseConverter }
  );

  const onChange = (value: string) => {
    setValue(value);
    onChangeValue(value);
  };

  return (
    <SelfDropdown
      label={label}
      items={data || []}
      width={width}
      inputValue={value}
      inputWidth={inputWidth}
      onChange={onChange}
      onClickSelected={refetch}
    />
  );
}

export default SelfDropdownContainer;
