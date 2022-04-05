import React from 'react';
import { action } from '@storybook/addon-actions';
import Dropdown from '.';
import { LANGUAGES } from '../../../common/constants';

export default {
  title: 'Widget/Dropdown',
  component: Dropdown,
};

const clickAction = action('click item');
const languageNames = LANGUAGES.map((l) => l.name);
export const dropdown = () => (
  <div style={{ width: '10rem' }}>
    <Dropdown items={languageNames} onClickItem={clickAction} />
  </div>
);
