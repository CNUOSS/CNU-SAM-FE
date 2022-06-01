import React, { useEffect, useState } from 'react';
import * as Style from './styled';

interface SearchDropdownProps {
  items: string[];
  error?: string;
  label?: string;
  width?: string;
  isLoading?: boolean;
  defaultValue?: string;
  onChangeValue: (value: string) => void;
  onClickSelected?: () => void;
}

interface CoverProps {
  children: React.ReactElement[];
  label?: string;
}

const Cover = ({ children, label }: CoverProps) =>
  label ? <Style.DropdownWrapper>{children}</Style.DropdownWrapper> : <>{children}</>;

// TODO: apply debouncing
function SearchDropdown({
  items,
  error,
  label,
  width = 'fit-content',
  isLoading,
  defaultValue = '',
  onChangeValue,
  onClickSelected,
}: SearchDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(defaultValue);

  const changeInputValue = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value);
  const closeList = () => setIsOpen(false);
  const selectItem = (idx: number) => {
    closeList();
    setText(items[idx]);
  };
  const onFocus = () => {
    if (!isOpen && onClickSelected) onClickSelected();
    setIsOpen(true);
  };

  useEffect(() => {
    onChangeValue(text);
  }, [text]);

  return (
    <Cover label={label}>
      {label ? <Style.Label>{label}</Style.Label> : <></>}
      <Style.Container width={width}>
        <Style.CurrentItem value={text} onChange={changeInputValue} onFocus={onFocus} />
        {isOpen && (
          <Style.List>
            {isLoading ? (
              <>loading</>
            ) : (
              items.map((item, idx) =>
                item.includes(text) ? (
                  // eslint-disable-next-line react/no-array-index-key
                  <Style.Item key={`${item}${idx}`} onClick={() => selectItem(idx)}>
                    {item}
                  </Style.Item>
                ) : (
                  <></>
                )
              )
            )}
          </Style.List>
        )}
      </Style.Container>
    </Cover>
  );
}

export default SearchDropdown;
