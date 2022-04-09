import React from 'react';
import { action } from '@storybook/addon-actions';
import Accordion from '.';

export default {
  title: 'Widget/Accordion',
  component: Accordion,
};

const title = 'project';
const items = ['item1', 'item2'];
const clickAction = action('click item');

export const able = () => (
  <div style={{ width: '30rem' }}>
    <Accordion title={title} items={items} onClickItem={clickAction} />
  </div>
);

export const disable = () => (
  <div style={{ width: '30rem' }}>
    <Accordion title={title} items={items} disable onClickItem={clickAction} />
  </div>
);
