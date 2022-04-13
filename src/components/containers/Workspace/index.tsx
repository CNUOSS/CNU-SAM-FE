import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { DropResult } from 'react-beautiful-dnd';

import * as Style from './styled';
import Icon from '../../widgets/Icon';
import DnD from '../../../components/widgets/DnD';
import { tabState, tabSelector } from '../../../recoil/tab';

function TabList({ children, refs, ...props }: any) {
  return (
    <Style.TabList ref={refs} {...props}>
      {children}
    </Style.TabList>
  );
}

function TabItem({ children, refs, ...props }: any) {
  return (
    <Style.TabItem {...props} ref={refs}>
      {children}
      <Icon size="1.6rem" icon="close" />
    </Style.TabItem>
  );
}

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
