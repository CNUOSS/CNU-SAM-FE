import React from 'react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Dropdown from '.';
import { LANGUAGES } from '../../../common/constants';

export default {
  title: 'Widget/Dropdown',
  component: Dropdown,
};

const clickAction = action('click item');
const languageNames = LANGUAGES.map((l) => l.name);
const label = text('LABEL', 'label');
export const dropdown = () => <Dropdown items={languageNames} onClickItem={clickAction} />;
export const dropdownWidth = () => <Dropdown width="30rem" items={languageNames} onClickItem={clickAction} />;
export const dropdownWithLabel = () => <Dropdown items={languageNames} label={label} onClickItem={clickAction} />;
