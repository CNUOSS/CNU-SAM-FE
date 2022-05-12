import React from 'react';
import Dropdown from '@components/widgets/Dropdown';
import useFetch from '@hooks/useFetch';

interface DropdownContainerProps {
  label?: string;
  width?: string;
  getUrl: string;
  onClickItem: (item: string) => void;
}

function DropdownContainer({ label, width, getUrl, onClickItem }: DropdownContainerProps) {
  const { data, refetch } = useFetch<string[]>(getUrl, {}, { enabled: false });

  const clickHandler = (clickIndex: number) => {
    if (data) onClickItem(data[clickIndex]);
  };

  return (
    <Dropdown
      existNoneSelect
      label={label}
      width={width}
      items={data || []}
      onClickSelected={refetch}
      onClickItem={clickHandler}
    />
  );
}

export default DropdownContainer;
