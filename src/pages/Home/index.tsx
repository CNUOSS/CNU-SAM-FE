import React from 'react';
import * as Style from './styled';
import Sidebar from '../../components/containers/Sidebar';
import Workspace from '../../components/containers/Workspace';

// FIXME: remove
const DUMMY_TABS = ['tab1', 'tab2', 'tab3'];

function HomePage() {
  return (
    <Style.Container>
      <Sidebar isLogin />
      <Workspace tabs={DUMMY_TABS} />
    </Style.Container>
  );
}

export default HomePage;
