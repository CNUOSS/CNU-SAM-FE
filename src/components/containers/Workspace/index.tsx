import React, { useState } from 'react';
import * as Style from './styled';
import Icon from '../../widgets/Icon';

interface WorkspaceProps {
  tabs: string[];
}

function Workspace({ tabs }: WorkspaceProps) {
  const [selectedIndex, setSelectedIndex] = useState(tabs.length - 1);

  const changeTabItem = (idx: number) => {
    setSelectedIndex(idx);
  };

  return (
    <Style.Container>
      <Style.TabList>
        {tabs.map((tab, idx) => (
          <Style.TabItem key={tab} selected={selectedIndex === idx} onClick={() => changeTabItem(idx)}>
            {tab}
            <Style.IconWrapper>
              <Icon icon="close" />
            </Style.IconWrapper>
          </Style.TabItem>
        ))}
      </Style.TabList>
      <Style.Workspace />
    </Style.Container>
  );
}

export default Workspace;
