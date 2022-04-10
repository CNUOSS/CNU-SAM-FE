import React from 'react';
import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import Input from '.';

export default {
  title: 'Widget/Input',
  component: Input,
};

const value = text('VALUE', 'value');
const label = text('LABEL', 'label');
const onChangeAction = action('change value');

export const inputText = () => <Input value={value} onChange={onChangeAction} />;
export const inputPW = () => <Input value={value} type="password" onChange={onChangeAction} />;
export const inputEmail = () => <Input value={value} type="email" onChange={onChangeAction} />;
export const inputWidth = () => <Input value={value} onChange={onChangeAction} width="30rem" />;
export const inputWithLabel = () => <Input value={value} onChange={onChangeAction} label={label} />;
