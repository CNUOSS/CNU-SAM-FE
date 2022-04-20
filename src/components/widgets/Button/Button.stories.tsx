import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '.';

export default {
  title: 'Widget/Button',
  component: Button,
};

const clickAction = action('click action');

export const primaryButton = () => (
  <Button theme="secondary" onClick={clickAction}>
    button
  </Button>
);

export const warningButton = () => (
  <Button theme="warning" onClick={clickAction}>
    button
  </Button>
);
