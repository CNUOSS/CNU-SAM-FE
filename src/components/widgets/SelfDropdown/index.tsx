import React, { useEffect, useState } from 'react';
import Input from '../Input';
import Dropdown from '../Dropdown';
import * as Style from './styled';

interface SelfDropdown {
  /* dropdown */
  label?: string;
  items: string[];
  width: number; // rem
  currentIdx?: number;
  /* input */
  inputValue: string;
  inputWidth: number; // rem
  onClickSelected?: () => void;
  onChange: (text: string) => void;
}

const SELFINPUT = '직접 입력';

function SelfDropdown({
  label,
  items,
  width,
  currentIdx,
  inputValue,
  inputWidth,
  onChange,
  onClickSelected,
}: SelfDropdown) {
  const itemsWithSelf = [...items, SELFINPUT];
  const [selectedItem, setItem] = useState(currentIdx ? items[currentIdx] : SELFINPUT);

  const handleDropdownClickItem = (index: number) => {
    setItem(itemsWithSelf[index]);
    if (itemsWithSelf[index] === SELFINPUT) onChange('');
    else onChange(itemsWithSelf[index]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value);

  useEffect(() => {
    if (currentIdx) onChange(items[currentIdx]);
  }, []);

  return (
    <Style.Container>
      <Dropdown
        label={label}
        items={itemsWithSelf}
        width={`${selectedItem === SELFINPUT ? width - inputWidth - 1 : width}rem`}
        currentIdx={currentIdx}
        onClickSelected={onClickSelected}
        onClickItem={handleDropdownClickItem}
      />
      {selectedItem === SELFINPUT && (
        <Input value={inputValue} width={`${inputWidth}rem`} onChange={handleInputChange} />
      )}
    </Style.Container>
  );
}

export default SelfDropdown;
