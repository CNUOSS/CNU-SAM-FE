import React from 'react';
import { useSetRecoilState } from 'recoil';
import TabTemplate from '../../templates/TabTemplate';
import Table from '../../widgets/Table';
import Input from '../../widgets/Input';
import TabForm from '../../widgets/TabForm';
import Dropdown from '../../widgets/Dropdown';
import ProjectDetailTab from '../ProjectDetailTab';
import { projectListAttr } from '../../../common/constants';
import { ProjectListAttr, Number } from '../../../@types/types';
import { tabState } from '../../../recoil/tab';
import compareTabs from '../../../utils/compare-tabs';
import * as Style from './styled';

export type ItemType = {
  [key in ProjectListAttr]: string;
};

export interface RowType extends ItemType {
  [Number]: number;
}

// FIXME: removed
interface ProjectListTabProps {
  items: ItemType[];
}

function ProjectListTab({ items }: ProjectListTabProps) {
  const setTabState = useSetRecoilState(tabState);
  const parsedItems: RowType[] = items.map((item, index) => ({ ...item, number: index + 1 }));

  const clickItem = (item: any) => {
    setTabState((oldState) => compareTabs(oldState, `${item.prjName} 프로젝트`, <ProjectDetailTab versions={[]} />));
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
      <Style.TableWrapper>
        <Table title="프로젝트 목록" attributes={projectListAttr} items={parsedItems} onRowClick={clickItem} />
      </Style.TableWrapper>
    </TabTemplate>
  );
}

export default ProjectListTab;
