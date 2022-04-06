import React from 'react';
import * as Style from './styled';
import Sidebar from '../../components/containers/Sidebar';
import Workspace from '../../components/containers/Workspace';

function HomePage() {
  return (
    <Style.Container>
      <Sidebar isLogin />
      <Workspace />
    </Style.Container>
  );
}

export default HomePage;
