import React, { useState } from 'react';

export interface TabType {
  name: string;
  component: React.ReactElement;
}

interface UseTabsProps {
  tabs: TabType[];
  currentTabIdx: number;
  changeTab: (idx: number) => void;
  addNewTab: (name: string, component: React.ReactElement) => void;
}

// if prop drilling exist,
// how about use Recoil?
function useTabs(): UseTabsProps {
  const [tabs, setTabs] = useState<TabType[]>([]);
  const [currentTabIdx, setCurrentTabIdx] = useState<number>(tabs.length - 1);

  const changeTab = (idx: number) => setCurrentTabIdx(idx);
  const addNewTab = (name: string, component: React.ReactElement) => {
    const existTabIdx = tabs.findIndex((tab) => tab.name === name);
    setCurrentTabIdx(existTabIdx);
    if (existTabIdx >= 0) return;

    const newTabs = [...tabs, { name, component }];
    setCurrentTabIdx(newTabs.length - 1);
    setTabs(newTabs);
  };

  return { tabs, currentTabIdx, changeTab, addNewTab };
}

export default useTabs;
