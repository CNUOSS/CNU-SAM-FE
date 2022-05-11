import React from 'react';
import Sidebar from '.';

export default {
  title: 'Container/Sidebar',
  component: Sidebar,
};

export const notLogin = () => <Sidebar />;

// export const sidebarUser = () => <Sidebar userAuth="User" isLogin />;

// export const sidebarManager = () => <Sidebar userAuth="Manager" isLogin />;

// export const sidebarAdmin = () => <Sidebar userAuth="Admin" isLogin />;

// export const sidebarLogout = () => <Sidebar isLogin={false} />;
