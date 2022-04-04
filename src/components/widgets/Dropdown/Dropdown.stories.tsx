import React from 'react';
import { action } from '@storybook/addon-actions';
import Dropdown from '.';
import { LANGUAGES } from '../../../common/constants';

export default {
  title: 'Widget/Dropdown',
  component: Dropdown,
};

const clickAction = action('click item');
export const dropdown = () => (
  <div style={{ width: '10rem' }}>
    <Dropdown items={LANGUAGES} onClickItem={clickAction} />
  </div>
);
