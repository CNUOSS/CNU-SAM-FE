// Dependencies
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import TabTemplate from '@components/templates/TabTemplate';

// Components
import Input from '@components/widgets/Input';
import Error from '@components/widgets/Error';
import TabForm from '@components/widgets/TabForm';
import Dropdown from '@components/widgets/Dropdown';
import ProjectDetailTab from '@components/containers/ProjectDetailTab';
import Table, { SearchInfoType } from './Table';

import { tabState } from '@recoil/tab';
import compareTabs from '@utils/compare-tabs';
import AsyncBoundary from '@libs/AsyncBoundary';
import LoadingModal from '@components/modals/LoadingModal';
import * as Style from './styled';
import { ProjectType } from '@@types/client';

function ProjectListTab() {
  const setTabState = useSetRecoilState(tabState);
  const [infoStore] = useState<SearchInfoType>({
    user: '',
    lcId: '',
    pjName: '',
    category: '',
  });

  const clickItem = (item: ProjectType) => {
    setTabState((oldState) =>
      compareTabs(oldState, `${item.projectName} 프로젝트`, <ProjectDetailTab versions={[]} />)
    );
  };

  return (
    <TabTemplate description="Description">
      <TabForm buttonText="조회하기">
        <Style.InputWrapper>
          <Input label="프로젝트명" value="" onChange={() => {}} />
          <Input label="소유자" value="" onChange={() => {}} />
          <Dropdown label="카테고리" items={[]} onClickItem={() => {}} />
          <Dropdown label="라이선스" items={[]} onClickItem={() => {}} />
        </Style.InputWrapper>
      </TabForm>
      <AsyncBoundary pendingFallback={<LoadingModal />} rejectedFallback={Error}>
        <Style.TableWrapper>
          <Table searchInfo={infoStore} onRowClick={clickItem} />
        </Style.TableWrapper>
      </AsyncBoundary>
    </TabTemplate>
  );
}

export default ProjectListTab;
