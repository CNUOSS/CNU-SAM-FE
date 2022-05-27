import React from 'react';
import Dropdown from '@components/widgets/Dropdown';
import useFetch from '@hooks/useFetch';

interface DropdownContainerProps<T> {
  label?: string;
  width?: string;
  getUrl: string;
  // if result data is object array, to filter
  itemKey?: string;
  responseConverter: (response: any) => T[];
  onClickItem: (item: T) => void;
}

function DropdownContainer<T>({
  label,
  width,
  getUrl,
  itemKey,
  responseConverter,
  onClickItem,
}: DropdownContainerProps<T>) {
  const { data, refetch, isLoading } = useFetch<T[]>(
    getUrl,
    {},
    { enabled: false, suspense: false },
    { response: responseConverter }
  );

  const clickHandler = (clickIndex: number) => {
    if (data) onClickItem(data[clickIndex]);
  };

  const resultIsObjectArray = itemKey && data && typeof data[0] === 'object';
  const objectData = resultIsObjectArray && (data as any[]).map((d) => d[itemKey]);
  return (
    <Dropdown
      existNoneSelect
      label={label}
      width={width}
      isLoading={isLoading}
      items={objectData || data || []}
      onClickSelected={refetch}
      onClickItem={clickHandler}
    />
  );
}

export default DropdownContainer;
