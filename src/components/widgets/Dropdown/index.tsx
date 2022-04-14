import React, { useState } from 'react';
import Icon from '../Icon';
import * as Style from './styled';

interface DropdownProps {
  items: string[];
  label?: string;
  width?: string;
  currentIdx?: number;
  onClickItem: (selectedIdx: number) => void;
}

interface CoverProps {
  children: React.ReactElement[];
  label?: string;
}

const Cover = ({ children, label }: CoverProps) =>
  label ? <Style.DropdownWrapper>{children}</Style.DropdownWrapper> : <>{children}</>;

function Dropdown({ items, label, width = '10rem', currentIdx = 0, onClickItem }: DropdownProps) {
  const [selectedIdx, setSelectedIdx] = useState(currentIdx);
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => setIsOpen((prev) => !prev);
  const selectItem = (idx: number) => {
    toggleList();
    setSelectedIdx(idx);
    onClickItem(idx);
  };

  return (
    <Cover label={label}>
      {label ? <Style.Label>{label}</Style.Label> : <></>}
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
    </Cover>
  );
}

export default Dropdown;
