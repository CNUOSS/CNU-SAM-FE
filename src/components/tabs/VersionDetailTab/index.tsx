import React from 'react';
import TabTemplate from '@components/templates/TabTemplate';
import Button from '@components/widgets/Button';
import LineTable from '@components/widgets/LineTable';
import { generateOssAnalysis } from '../../../__mocks__/api-mock';
import { ossAnalysisListAttr } from '@common/constants';
import * as Style from './styled';

interface VersionDetailTabProps {
  projectId: number;
  versionId: number;
}

function VersionDetailTab({ projectId, versionId }: VersionDetailTabProps) {
  const dummyOSS = [generateOssAnalysis(), generateOssAnalysis(), generateOssAnalysis()];
  const deleteVersion = () => {};

  return (
    <TabTemplate description="버전 상세보기">
      <Button onClick={deleteVersion}>삭제하기</Button>
      <Style.TableWrapper>
        <LineTable columns={ossAnalysisListAttr} data={dummyOSS} />
      </Style.TableWrapper>
    </TabTemplate>
  );
}

export default VersionDetailTab;
