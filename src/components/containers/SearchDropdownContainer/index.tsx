import React from 'react';
import SearchDropdown from '@components/widgets/SearchDropdown';
import useFetch from '@hooks/useFetch';

interface SearchDropdownContainerProps<T> {
  label?: string;
  width?: string;
  getUrl: string;
  // if result data is object array, to filter
  itemKey?: string;
  defaultValue?: string;
  responseConverter: (response: any) => T[];
  onChangeValue: (item: T) => void;
}

function SearchDropdownContainer<T>({
  label,
  width,
  getUrl,
  itemKey,
  defaultValue = '',
  responseConverter,
  onChangeValue,
}: SearchDropdownContainerProps<T>) {
  const { data, refetch, isLoading } = useFetch<T[]>(
    getUrl,
    {},
    { enabled: false, suspense: false },
    { response: responseConverter }
  );

  const resultIsObjectArray = itemKey && data && typeof data[0] === 'object';
  const objectData = resultIsObjectArray && (data as any[]).map((d) => d[itemKey]);
  const items = objectData || data || [];
  const changeHandler = (value: string) => {
    const index = items.findIndex((item) => item === value);
    if (data && index >= 0) onChangeValue(data[index]);
  };

  return (
    <SearchDropdown
      items={items}
      label={label}
      width={width}
      isLoading={isLoading}
      defaultValue={defaultValue}
      onChangeValue={changeHandler}
      onClickSelected={refetch}
    />
  );
}

export default SearchDropdownContainer;
