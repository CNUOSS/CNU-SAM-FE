import React, { forwardRef, LegacyRef } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { DropResult } from 'react-beautiful-dnd';

import * as Style from './styled';
import Icon from '../../widgets/Icon';
import DnD, { TAB_NAME_ATTR } from '../../../components/widgets/DnD';
import { tabState, tabSelector } from '../../../recoil/tab';

export const TabList = forwardRef<LegacyRef<HTMLUListElement>, any>(({ children, ...props }, ref) => (
  <Style.TabList ref={ref} {...props}>
    {children}
  </Style.TabList>
));

export const TabItem = forwardRef<LegacyRef<HTMLLIElement>, any>(({ children, ...props }, ref) => {
  const setTabState = useSetRecoilState(tabState);

  const name = props[TAB_NAME_ATTR];
  const closeTab = () => {
    setTabState(({ tabs, currentIdx }) => {
      const tabIndex = tabs.findIndex((tab) => tab.name === name);
      return {
        tabs: tabs.filter((tab) => tab.name !== name),
        currentIdx: tabIndex > currentIdx ? currentIdx : Math.max(currentIdx - 1, 0),
      };
    });
  };

  return (
    <Style.TabItem {...props} ref={ref}>
      {children}
      <Icon size="1.6rem" icon="close" onClick={closeTab} />
    </Style.TabItem>
  );
});

function Workspace() {
  const { tabNames } = useRecoilValue(tabSelector);
  const [{ tabs, currentIdx }, setTabState] = useRecoilState(tabState);

  const changeTab = (idx: number) => setTabState(({ tabs }) => ({ tabs, currentIdx: idx }));

  const dndTab = (startIdx: number, endIdx: number) => {
    const copiedTabs = [...tabs];
    const [removed] = copiedTabs.splice(startIdx, 1);
    copiedTabs.splice(endIdx, 0, removed);
    setTabState({ tabs: copiedTabs, currentIdx: endIdx });
  };

  const dragEndHandler = (result: DropResult) => {
    if (!result.destination) return;
    dndTab(result.source.index, result.destination?.index);
  };

  return (
    <Style.Container>
      <DnD
        ListComponent={TabList}
        ItemComponent={TabItem}
        items={tabNames}
        onDragEnd={dragEndHandler}
        selectedIndex={currentIdx}
        clickItem={(idx) => changeTab(idx)}
      />
      {tabs.map((tab, idx) => (
        <Style.Workspace key={tab.name} selected={idx === currentIdx}>
          {tab.component}
        </Style.Workspace>
      ))}
    </Style.Container>
  );
}

export default Workspace;
