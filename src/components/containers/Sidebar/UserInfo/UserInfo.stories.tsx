import React from 'react';
import { action } from '@storybook/addon-actions';
import UserInfo from '.';

export default {
  title: 'Container/Sidebar/UserInfo',
  component: UserInfo,
};

const addNewTabAction = action('add new tab');

export const userInfo = () => (
  <div style={{ width: '25rem' }}>
    <UserInfo addNewTab={addNewTabAction} />
  </div>
);
