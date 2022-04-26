import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Checkbox from '.';

export default {
  title: 'Widget/Checkbox',
  component: Checkbox,
};

const label = text('LABEL', 'label');
const onClickAction = action('on click');
export const checkbox = () => <Checkbox label={label} onClick={onClickAction} />;
