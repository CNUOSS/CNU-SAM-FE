// Dependencies
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import TabTemplate from '@components/templates/TabTemplate';

// Components
import Input from '@components/widgets/Input';
import TabForm from '@components/widgets/TabForm';
import ProjectDetailTab from '@components/tabs/ProjectDetailTab';
import DropdownContainer from '@components/containers/DropdownContainer';
import AsyncBoundaryWrapper from '@components/containers/AsyncBoundaryWrapper';
import Table, { SearchInfoType } from './Table';

// Apis
import { getCategoryNamesAPI, getLicenseNamesAPI } from '@apis/data';
import { getCategoryNamesResponseServer2Client, getLicenseNamesResponseServer2Client } from '@converter/data';

import useForm from '@hooks/useForm';
import { tabState } from '@recoil/tab';
import { compareTabs } from '@utils/manage-tabs';
import { LicenseNamesType, ProjectListItemType } from '@@types/client';
import * as Style from './styled';

function ProjectListTab() {
  const { change, getValue, getAllValue } = useForm<SearchInfoType>();
  const setTabState = useSetRecoilState(tabState);
  const [infoStore, setInfoStore] = useState<SearchInfoType>({
    user: '',
    lcId: '',
    pjName: '',
    category: '',
  });

  const selectCategory = (category: string) => change('category')(category);
  const selectLicense = (license: LicenseNamesType) => change('lcId')(String(license.id));

  const clickItem = (item: ProjectListItemType) => {
    setTabState((oldState) =>
      compareTabs(oldState, `${item.id} . ${item.projectName}`, <ProjectDetailTab projectId={item.id} />)
    );
  };

  const handleSearch = () => setInfoStore((store) => ({ ...store, ...getAllValue() }));

  return (
    <TabTemplate description="Description">
      <TabForm buttonText="조회하기" onSubmit={handleSearch}>
        <Style.InputWrapper>
          <Input label="프로젝트명" value={getValue('pjName')} onChange={change('pjName')} />
          <Input label="소유자" value={getValue('user')} onChange={change('user')} />
          <DropdownContainer
            label="카테고리"
            getUrl={getCategoryNamesAPI}
            responseConverter={getCategoryNamesResponseServer2Client}
            onClickItem={selectCategory}
          />
          {/* FIXME: SearchDropdown */}
          <DropdownContainer
            label="라이선스"
            getUrl={getLicenseNamesAPI}
            itemKey="licenseName"
            responseConverter={getLicenseNamesResponseServer2Client}
            onClickItem={selectLicense}
          />
        </Style.InputWrapper>
      </TabForm>
      <AsyncBoundaryWrapper>
        <Style.TableWrapper>
          <Table searchInfo={infoStore} onRowClick={clickItem} />
        </Style.TableWrapper>
      </AsyncBoundaryWrapper>
    </TabTemplate>
  );
}

export default ProjectListTab;
