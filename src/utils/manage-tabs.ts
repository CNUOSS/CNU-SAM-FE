import React from 'react';
import { TabState } from '@recoil/tab/atom';

export const compareTabs = (oldState: TabState, name: string, component: React.ReactElement): TabState => {
  const index = oldState.tabs.findIndex((tab) => tab.name === name);
  if (index === oldState.currentIdx) return oldState;
  return {
    currentIdx: index < 0 ? oldState.tabs.length : index,
    tabs: index < 0 ? [...oldState.tabs, { name, component }] : oldState.tabs,
  };
};

export const deleteTabs = ({ tabs, currentIdx }: TabState, name: string): TabState => {
  const tabIndex = tabs.findIndex((tab) => tab.name === name);
  return {
    tabs: tabs.filter((tab) => tab.name !== name),
    currentIdx: tabIndex > currentIdx ? currentIdx : Math.max(currentIdx - 1, 0),
  };
};
