import React from 'react';
import * as Style from './styled';
import Sidebar from '../../components/containers/Sidebar';
import Workspace from '../../components/containers/Workspace';
import useTabs from '../../hooks/useTabs';

function HomePage() {
  const { tabs, currentTabIdx, changeTab, addNewTab } = useTabs();

  return (
    <Style.Container>
      <Sidebar isLogin addNewTab={addNewTab} />
      <Workspace tabs={tabs} currentTabIndex={currentTabIdx} changeTab={changeTab} />
    </Style.Container>
  );
}

export default HomePage;
