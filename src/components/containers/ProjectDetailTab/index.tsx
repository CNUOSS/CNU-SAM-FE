import React from 'react';
import TabTemplate from '../../templates/TabTemplate';
import DefaultText from '../../widgets/DefaultText';
import Button from '../../widgets/Button';
import Table from '../../widgets/Table';
import { VersionListAttr } from '../../../@types/types';
import { versionListAttr } from '../../../common/constants';
import * as Style from './styled';

export type SummarizedVersionType = {
  [key in VersionListAttr]: string;
};

interface ProjectDetailTabProps {
  versions: SummarizedVersionType[];
}

function ProjectDetailTab({ versions }: ProjectDetailTabProps) {
  const parsedVersions = versions.map((version, index) => ({
    ...version,
    number: index + 1,
    temp: <Button>라이선스 지킴이</Button>,
  }));

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
          <Button>버전 등록하기</Button>
        </Style.EnrollButtonWrapper>
        <Table title="프로젝트 버전" attributes={versionListAttr} items={parsedVersions} />
      </Style.TableWrapper>
    </TabTemplate>
  );
}

export default ProjectDetailTab;
