import React from 'react';
import AddOrUpdateProjectTab from '.';

export default {
  title: 'Container/AddOrUpdateProjectTab',
  component: AddOrUpdateProjectTab,
};

export const createTab = () => <AddOrUpdateProjectTab tabState="create" />;

export const updateTab = () => <AddOrUpdateProjectTab tabState="update" />;
