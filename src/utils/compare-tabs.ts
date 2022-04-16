import React from 'react';
import { TabState } from '../recoil/tab/atom';

const compareTabs = (oldState: TabState, name: string, component: React.ReactElement) => {
  const index = oldState.tabs.findIndex((tab) => tab.name === name);
  if (index === oldState.currentIdx) return oldState;
  return {
    currentIdx: index < 0 ? oldState.tabs.length : index,
    tabs: index < 0 ? [...oldState.tabs, { name, component }] : oldState.tabs,
  };
};

export default compareTabs;
