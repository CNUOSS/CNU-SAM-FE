import React, { useState } from 'react';
import Icon from '../Icon';
import * as Style from './styled';

interface DropdownProps {
  items: string[];
  width?: string;
  currentIdx?: number;
  onClickItem: (selectedIdx: number) => void;
}

function Dropdown({ items, width = '10rem', currentIdx = 0, onClickItem }: DropdownProps) {
  const [selectedIdx, setSelectedIdx] = useState(currentIdx);
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => setIsOpen((prev) => !prev);
  const selectItem = (idx: number) => {
    toggleList();
    setSelectedIdx(idx);
    onClickItem(idx);
  };

  return (
    <Style.Container width={width}>
      <Style.CurrentItem data-testid="dropdown-selected" onClick={toggleList}>
        {items[selectedIdx]}
        <Style.IconWrapper isOpen={isOpen}>
          <Icon icon="triangle" />
        </Style.IconWrapper>
      </Style.CurrentItem>
      {isOpen && (
        <Style.List>
          {items.map((item, idx) => (
            <Style.Item key={item} selected={selectedIdx === idx} onClick={() => selectItem(idx)}>
              {item}
            </Style.Item>
          ))}
        </Style.List>
      )}
    </Style.Container>
  );
}

export default Dropdown;
