import React, { useState } from 'react';
import SelfDropdown from '@components/widgets/SelfDropdown';
import useFetch from '@hooks/useFetch';

interface SelfDropdownContainerProps {
  label?: string;
  defaultItem?: string;
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
  defaultItem = '',
  responseConverter,
  onChangeValue,
}: SelfDropdownContainerProps) {
  const [value, setValue] = useState(defaultItem);
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

  const items = data || [];
  const currentIdx = defaultItem ? items.findIndex((item) => item === defaultItem) : -1;
  return (
    <SelfDropdown
      label={label}
      items={items}
      width={width}
      currentIdx={currentIdx < 0 ? undefined : currentIdx}
      inputValue={value}
      inputWidth={inputWidth}
      onChange={onChange}
      onClickSelected={refetch}
    />
  );
}

export default SelfDropdownContainer;
