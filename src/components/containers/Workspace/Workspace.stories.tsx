import React from 'react';
import Workspace from '.';

export default {
  title: 'Container/Workspace',
  component: Workspace,
};

const tabs = ['tab1', 'tab2', 'tab3'];

export const workspace = () => <Workspace tabs={tabs} />;
