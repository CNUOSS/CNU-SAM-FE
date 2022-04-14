import React from 'react';
import { action } from '@storybook/addon-actions';
import SelfDropdown from '.';

export default {
  title: 'Widget/SelfDropdown',
  component: SelfDropdown,
};

const label = 'dropdown';
const items = ['item1', 'item2'];
const inputValue = '';
const onChangeAction = action('on change');
export const selfDropdownWithLabel = () => (
  <SelfDropdown
    label={label}
    items={items}
    width={20}
    inputValue={inputValue}
    inputWidth={10}
    onChange={onChangeAction}
  />
);

export const selfDropdownNoLabel = () => (
  <SelfDropdown items={items} width={20} inputValue={inputValue} inputWidth={10} onChange={onChangeAction} />
);
