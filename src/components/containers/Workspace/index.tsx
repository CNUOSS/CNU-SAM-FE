import React from 'react';
import { DropResult } from 'react-beautiful-dnd';
import * as Style from './styled';
import Icon from '../../widgets/Icon';
import { TabType } from '../../../hooks/useTabs';
import DnD from '../../../components/widgets/DnD';

interface WorkspaceProps {
  tabs: TabType[];
  currentTabIndex: number;
  changeTab: (idx: number) => void;
  dndTab: (startIdx: number, endIdx: number) => void;
}

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
      <Style.IconWrapper>
        <Icon icon="close" />
      </Style.IconWrapper>
    </Style.TabItem>
  );
}

function Workspace({ tabs, currentTabIndex, changeTab, dndTab }: WorkspaceProps) {
  const dragEndHandler = (result: DropResult) => {
    if (!result.destination) return;
    dndTab(result.source.index, result.destination?.index);
  };

  return (
    <Style.Container>
      <DnD
        ListComponent={TabList}
        ItemComponent={TabItem}
        items={tabs.map((tab) => tab.name)}
        onDragEnd={dragEndHandler}
        selectedIndex={currentTabIndex}
        clickItem={(idx) => changeTab(idx)}
      />
      {tabs.map((tab, idx) => (
        <Style.Workspace key={tab.name} selected={idx === currentTabIndex}>
          {tab.component}
        </Style.Workspace>
      ))}
    </Style.Container>
  );
}

export default Workspace;
