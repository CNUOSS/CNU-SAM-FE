// Dependencies
import React from 'react';
import { useSetRecoilState } from 'recoil';
import { tabState } from '@recoil/tab';

// Components
import TabTemplate from '@components/templates/TabTemplate';
import DefaultText from '@components/widgets/DefaultText';
import Button from '@components/widgets/Button';
import Table from '@components/widgets/Table';
import EnrollVersionTab from '@components/tabs/EnrollVersionTab';
import AsyncBoundaryWrapper from '@components/containers/AsyncBoundaryWrapper';

// APIs
import { deleteProjectAPI, getProjectDetailAPI, getProjectListAPI } from '@apis/project';
import { getProjectDetailResponseServer2Client } from '@converter/project';

import useFetch from '@hooks/useFetch';
import { VersionListAttr } from '@@types/types';
import { versionListAttr } from '@common/constants';
import { GetProjectDetailResponseClientType } from '@@types/client';
import { compareTabs, deleteTabs } from '@utils/manage-tabs';
import { useAuth } from '@libs/auth';
import * as Style from './styled';
import useMutation from '@hooks/useMutation';
import { useQueryClient } from 'react-query';

export type SummarizedVersionType = {
  [key in VersionListAttr]: string;
};

interface ProjectDetailTabProps {
  projectId: number;
}

function ProjectDetailTab({ projectId }: ProjectDetailTabProps) {
  const queryClient = useQueryClient();
  const setTabState = useSetRecoilState(tabState);
  const { user } = useAuth();
  const { data } = useFetch<GetProjectDetailResponseClientType>(
    getProjectDetailAPI.url(projectId),
    {},
    { suspense: false }, // TODO: how to process suspense clearly?
    { response: getProjectDetailResponseServer2Client }
  );

  const deleteMutationSuccess = async () => {
    if (!data) return;
    await queryClient.invalidateQueries(getProjectListAPI);
    setTabState((prev) => deleteTabs(prev, `${data.id} . ${data.projectName}`));
  };
  const { mutate: deleteMutate } = useMutation({
    url: deleteProjectAPI.url(0),
    method: deleteProjectAPI.method,
    onSuccess: deleteMutationSuccess,
  });

  const clickEnrollVersionButton = () => {
    if (!data) return;
    setTabState((oldState) =>
      compareTabs(
        oldState,
        `${data.id} . ${data.projectName}: 버전등록`,
        <EnrollVersionTab projectId={data.id} projectName={data.projectName} />
      )
    );
  };

  const deleteProject = () => {
    if (data) deleteMutate({ dynamicUrl: deleteProjectAPI.url(data.id) });
  };

  const parsedVersions =
    data?.versionList.map((version, index) => ({
      ...version,
      number: index + 1,
      temp: <Button>라이선스 지킴이</Button>,
    })) || [];

  if (!data) return <></>;
  return (
    <TabTemplate description="Description" onDelete={user?.id === data.userId ? deleteProject : undefined}>
      <AsyncBoundaryWrapper>
        <Style.BackGroundBox>
          <Style.InputWrapper>
            <DefaultText label="프로젝트명">{data.projectName}</DefaultText>
            <DefaultText label="소유자">{data.userId}</DefaultText>
            <DefaultText label="카테고리">{data.projectCategoryName}</DefaultText>
            <DefaultText label="라이선스">{data.ossLicenseName}</DefaultText>
          </Style.InputWrapper>
          <Style.DescriptionWrapper>
            <Style.Label>설명</Style.Label>
            <Style.DescriptionInput>{data.projectDescription}</Style.DescriptionInput>
          </Style.DescriptionWrapper>
        </Style.BackGroundBox>
        <Style.TableWrapper>
          <Style.EnrollButtonWrapper>
            {user && user.id === data.userId && <Button onClick={clickEnrollVersionButton}>버전 등록하기</Button>}
          </Style.EnrollButtonWrapper>
          <Table title="프로젝트 버전" attributes={versionListAttr} items={parsedVersions} />
        </Style.TableWrapper>
      </AsyncBoundaryWrapper>
    </TabTemplate>
  );
}

export default ProjectDetailTab;
