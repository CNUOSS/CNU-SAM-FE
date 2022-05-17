import React from 'react';
import Dropdown from '@components/widgets/Dropdown';
import useFetch from '@hooks/useFetch';

interface DropdownContainerProps {
  label?: string;
  width?: string;
  getUrl: string;
  responseConverter: (response: any) => string[];
  onClickItem: (item: string) => void;
}

function DropdownContainer({ label, width, getUrl, responseConverter, onClickItem }: DropdownContainerProps) {
  const { data, refetch, isLoading } = useFetch<string[]>(
    getUrl,
    {},
    { enabled: false, suspense: false },
    { response: responseConverter }
  );

  const clickHandler = (clickIndex: number) => {
    if (data) onClickItem(data[clickIndex]);
  };

  return (
    <Dropdown
      existNoneSelect
      label={label}
      width={width}
      isLoading={isLoading}
      items={data || []}
      onClickSelected={refetch}
      onClickItem={clickHandler}
    />
  );
}

export default DropdownContainer;
