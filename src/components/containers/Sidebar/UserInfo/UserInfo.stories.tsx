import React from 'react';
import UserInfo from '.';

export default {
  title: 'Container/Sidebar/UserInfo',
  component: UserInfo,
};

export const userInfo = () => (
  <div style={{ width: '25rem' }}>
    <UserInfo />
  </div>
);
