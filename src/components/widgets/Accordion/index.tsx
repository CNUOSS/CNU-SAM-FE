import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { theme } from '../../../style/theme';
import Icon from '../Icon';
import * as Style from './styled';

interface AccordionProps {
  title: string;
  items: string[];
  disable?: boolean;
  onClickItem: (item: string) => void;
}

function Accordion({ title, items, disable = false, onClickItem }: AccordionProps) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleList = () => setIsOpen((prev) => !prev);
  const handleClickItem = (item: string) => !disable && onClickItem(item);

  return (
    <Style.Container>
      <Style.Category onClick={toggleList} disable={disable}>
        {t(`page:${title}`)}
        <Style.IconWrapper isOpen={isOpen}>
          <Icon icon="triangle" color={disable ? 'white' : theme.colors.primary} />
        </Style.IconWrapper>
      </Style.Category>
      <Style.List isOpen={isOpen} numOfItems={items.length}>
        {items.map((item) => (
          <Style.Item data-testid="accordion-item" key={item} onClick={() => handleClickItem(item)} disable={disable}>
            {t(`page:${item}`)}
          </Style.Item>
        ))}
      </Style.List>
    </Style.Container>
  );
}

export default Accordion;
