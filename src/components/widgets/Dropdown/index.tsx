import React, { useState } from 'react';
import { NOT_CHOOSED } from '@common/constants';
import Icon from '../Icon';
import * as Style from './styled';

interface DropdownProps {
  items: string[];
  error?: string;
  label?: string;
  width?: string;
  currentIdx?: number;
  isLoading?: boolean;
  existNoneSelect?: boolean;
  onClickSelected?: () => void;
  onClickItem: (selectedIdx: number) => void;
}

interface CoverProps {
  children: React.ReactElement[];
  label?: string;
}

const Cover = ({ children, label }: CoverProps) =>
  label ? <Style.DropdownWrapper>{children}</Style.DropdownWrapper> : <>{children}</>;

function Dropdown({
  items,
  error,
  label,
  width = '10rem',
  currentIdx = 0,
  isLoading,
  existNoneSelect,
  onClickSelected,
  onClickItem,
}: DropdownProps) {
  const [selectedIdx, setSelectedIdx] = useState(currentIdx);
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => {
    if (!isOpen && onClickSelected) onClickSelected();
    setIsOpen((prev) => !prev);
  };
  const selectItem = (idx: number) => {
    toggleList();
    setSelectedIdx(idx);
    onClickItem(existNoneSelect ? idx - 1 : idx);
  };

  const newItems = [existNoneSelect ? NOT_CHOOSED : '', ...items].filter((item) => !!item);
  return (
    <Cover label={label}>
      {label ? <Style.Label>{label}</Style.Label> : <></>}
      <Style.Container width={width}>
        <Style.CurrentItem data-testid="dropdown-selected" onClick={toggleList}>
          {newItems[selectedIdx]}
          <Style.IconWrapper isOpen={isOpen}>
            <Icon size="0.8rem" icon="triangle" />
          </Style.IconWrapper>
        </Style.CurrentItem>
        {isOpen && (
          <Style.List>
            {isLoading ? (
              <>loading</>
            ) : (
              newItems.map((item, idx) => (
                <Style.Item key={item} selected={selectedIdx === idx} onClick={() => selectItem(idx)}>
                  {item}
                </Style.Item>
              ))
            )}
          </Style.List>
        )}
      </Style.Container>
    </Cover>
  );
}

export default Dropdown;
