import React from 'react';
import { action } from '@storybook/addon-actions';
import InputFile from '.';

export default {
  title: 'Widget/InputFile',
  component: InputFile,
};

const onChangeAction = action('onchange');
export const inputFile = () => <InputFile label="label" onChange={onChangeAction} />;
