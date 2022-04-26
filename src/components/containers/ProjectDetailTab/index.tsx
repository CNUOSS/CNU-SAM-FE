import React from 'react';
import { useSetRecoilState } from 'recoil';
import TabTemplate from '../../templates/TabTemplate';
import DefaultText from '../../widgets/DefaultText';
import Button from '../../widgets/Button';
import Table from '../../widgets/Table';
import EnrollVersionTab from '../EnrollVersionTab';
import { VersionListAttr } from '../../../@types/types';
import { versionListAttr } from '../../../common/constants';
import { tabState } from '../../../recoil/tab';
import compareTabs from '../../../utils/compare-tabs';
import * as Style from './styled';

export type SummarizedVersionType = {
  [key in VersionListAttr]: string;
};

interface ProjectDetailTabProps {
  // FIXME: get project id instead of versions
  versions: SummarizedVersionType[];
}

function ProjectDetailTab({ versions }: ProjectDetailTabProps) {
  const setTabState = useSetRecoilState(tabState);

  const parsedVersions = versions.map((version, index) => ({
    ...version,
    number: index + 1,
    temp: <Button>라이선스 지킴이</Button>,
  }));

  const clickEnrollVersionButton = () => {
    // TODO: if user, add authority compare logic
    setTabState((oldState) =>
      compareTabs(oldState, `프로젝트명: 버전등록`, <EnrollVersionTab projectName="프로젝트명" />)
    );
  };

  return (
    <TabTemplate description="Description" onUpdate={() => {}}>
      <Style.BackGroundBox>
        <Style.InputWrapper>
          <DefaultText label="프로젝트명">프로젝트명</DefaultText>
          <DefaultText label="소유자">소유자</DefaultText>
          <DefaultText label="카테고리">카테고리</DefaultText>
          <DefaultText label="라이선스">라이선스</DefaultText>
        </Style.InputWrapper>
        <Style.DescriptionWrapper>
          <Style.Label>설명</Style.Label>
          <Style.DescriptionInput>설명</Style.DescriptionInput>
        </Style.DescriptionWrapper>
      </Style.BackGroundBox>
      <Style.TableWrapper>
        <Style.EnrollButtonWrapper>
          <Button onClick={clickEnrollVersionButton}>버전 등록하기</Button>
        </Style.EnrollButtonWrapper>
        <Table title="프로젝트 버전" attributes={versionListAttr} items={parsedVersions} />
      </Style.TableWrapper>
    </TabTemplate>
  );
}

export default ProjectDetailTab;
