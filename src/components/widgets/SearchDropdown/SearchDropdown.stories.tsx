import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import SearchDropdown from '.';

export default {
  title: 'Widget/SearchDropdown',
  component: SearchDropdown,
};

const items = ['item1', 'item2'];
const label = text('LABEL', 'label');
const onChangeValue = action('on change');
const onClickSelectedItem = action('click selected item');
export const searchDropdown = () => (
  <SearchDropdown items={items} label={label} onChangeValue={onChangeValue} onClickSelected={onClickSelectedItem} />
);
