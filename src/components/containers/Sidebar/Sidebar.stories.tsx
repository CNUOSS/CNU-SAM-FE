import React from 'react';
import { action } from '@storybook/addon-actions';
import Sidebar from '.';

export default {
  title: 'Container/Sidebar',
  component: Sidebar,
};

const clickAction = action('click');

export const sidebarLogin = () => <Sidebar isLogin addNewTab={clickAction} />;

export const sidebarLogout = () => <Sidebar isLogin={false} addNewTab={clickAction} />;
