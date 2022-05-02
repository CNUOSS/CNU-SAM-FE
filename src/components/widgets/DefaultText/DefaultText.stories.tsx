import React from 'react';
import { text } from '@storybook/addon-knobs';
import DefaultText from '.';

export default {
  title: 'Widget/DefaultText',
  component: DefaultText,
};

const label = text('LABEL', 'label');
const content = text('TEXT', 'text');
export const withLabel = () => <DefaultText label={label}>{content}</DefaultText>;
export const noLabel = () => <DefaultText>{content}</DefaultText>;
