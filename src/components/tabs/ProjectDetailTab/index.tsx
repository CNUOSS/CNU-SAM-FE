// Dependencies
import React from 'react';
import { useAuth } from '@libs/auth';
import { useQueryClient } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { tabState } from '@recoil/tab';

// Components
import TabTemplate from '@components/templates/TabTemplate';
import DefaultText from '@components/widgets/DefaultText';
import Button from '@components/widgets/Button';
import Table from '@components/widgets/Table';
import EnrollVersionTab from '@components/tabs/EnrollVersionTab';
import AsyncBoundaryWrapper from '@components/containers/AsyncBoundaryWrapper';
import VersionDetailTab from '../VersionDetailTab';

// APIs
import { deleteProjectAPI, getProjectDetailAPI, getProjectListAPI } from '@apis/project';
import { getProjectDetailResponseServer2Client } from '@converter/project';

import useFetch from '@hooks/useFetch';
import useMutation from '@hooks/useMutation';
import { VersionListAttr } from '@@types/types';
import { DESCRIPTION, versionListAttr } from '@common/constants';
import { GetProjectDetailResponseClientType, VersionType } from '@@types/client';
import { compareTabs, deleteTabs } from '@utils/manage-tabs';
import * as Style from './styled';

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
        `${data.id} . ${data.projectName}: ????????????`,
        <EnrollVersionTab projectId={data.id} projectName={data.projectName} />
      )
    );
  };

  const deleteProject = () => {
    if (data) deleteMutate({ dynamicUrl: deleteProjectAPI.url(data.id) });
  };

  const openVersionDetailTab = (version: VersionType) => {
    setTabState((prev) =>
      compareTabs(
        prev,
        `${projectId} . ${data?.projectName} . ${version.versionName}`,
        <VersionDetailTab
          projectId={projectId}
          versionId={version.id}
          tabName={`${projectId} . ${data?.projectName} . ${version.versionName}`}
        />
      )
    );
  };

  const parsedVersions =
    data?.versionList.map((version, index) => ({
      ...version,
      number: index + 1,
      temp: <Button onClick={() => openVersionDetailTab(version)}>???????????? ?????????</Button>,
    })) || [];

  if (!data) return <></>;
  return (
    <TabTemplate
      description={DESCRIPTION.projectDetailTab}
      onDelete={user?.id === data.userId ? deleteProject : undefined}
    >
      <AsyncBoundaryWrapper>
        <Style.BackGroundBox>
          <Style.InputWrapper>
            <DefaultText label="???????????????">{data.projectName}</DefaultText>
            <DefaultText label="?????????">{data.userId}</DefaultText>
            <DefaultText label="????????????">{data.projectCategoryName}</DefaultText>
            <DefaultText label="????????????">{data.ossLicenseName}</DefaultText>
          </Style.InputWrapper>
          <Style.DescriptionWrapper>
            <Style.Label>??????</Style.Label>
            <Style.DescriptionInput>{data.projectDescription}</Style.DescriptionInput>
          </Style.DescriptionWrapper>
        </Style.BackGroundBox>
        <Style.TableWrapper>
          <Style.EnrollButtonWrapper>
            {user && user.id === data.userId && <Button onClick={clickEnrollVersionButton}>?????? ????????????</Button>}
          </Style.EnrollButtonWrapper>
          <Table title="???????????? ??????" attributes={versionListAttr} items={parsedVersions} />
        </Style.TableWrapper>
      </AsyncBoundaryWrapper>
    </TabTemplate>
  );
}

export default ProjectDetailTab;
