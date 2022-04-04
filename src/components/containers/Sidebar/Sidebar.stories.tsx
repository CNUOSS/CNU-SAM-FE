import React from 'react';
import Sidebar from '.';

export default {
  title: 'Container/Sidebar',
  component: Sidebar,
};

export const sidebarLogin = () => <Sidebar isLogin />;

export const sidebarLogout = () => <Sidebar isLogin={false} />;
