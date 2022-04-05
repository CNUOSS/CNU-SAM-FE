import React from 'react';
import * as Style from './styled';
import Icon from '../../widgets/Icon';
import { TabType } from '../../../hooks/useTabs';

interface WorkspaceProps {
  tabs: TabType[];
  currentTabIndex: number;
  changeTab: (idx: number) => void;
}

function Workspace({ tabs, currentTabIndex, changeTab }: WorkspaceProps) {
  return (
    <Style.Container>
      <Style.TabList>
        {tabs.map((tab, idx) => (
          <Style.TabItem key={tab.name} selected={currentTabIndex === idx} onClick={() => changeTab(idx)}>
            {tab.name}
            <Style.IconWrapper>
              <Icon icon="close" />
            </Style.IconWrapper>
          </Style.TabItem>
        ))}
      </Style.TabList>
      <Style.Workspace>{tabs.map((tab, idx) => tab.component)}</Style.Workspace>
    </Style.Container>
  );
}

export default Workspace;
