import React from 'react';
import { action } from '@storybook/addon-actions';
import Workspace from '.';

export default {
  title: 'Container/Workspace',
  component: Workspace,
};

const clickAction = action('click');
const tabs = [
  { name: 'tab1', component: <></> },
  { name: 'tab2', component: <></> },
  { name: 'tab3', component: <></> },
];

export const workspace = () => <Workspace tabs={tabs} currentTabIndex={0} changeTab={clickAction} />;
