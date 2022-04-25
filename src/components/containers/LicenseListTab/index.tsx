import React from 'react';
import TabTemplate from '../../templates/TabTemplate';
import Icon from '../../widgets/Icon';
import Table from '../../widgets/Table';
import Input from '../../widgets/Input';
import TabForm from '../../widgets/TabForm';
import Dropdown from '../../widgets/Dropdown';
import { licenseListAttr } from '../../../common/constants';
import { LicenseListAttr, Number, Trash } from '../../../@types/types';
import * as Style from './styled';

export type ItemType = {
  [key in LicenseListAttr]: string;
};

export interface RowType extends ItemType {
  [Number]: number;
  [Trash]: React.ReactElement;
}

// FIXME: remove
interface ProjectDetailTab {
  items: ItemType[];
}

function LicenseListTab({ items }: ProjectDetailTab) {
  const parsedItem: RowType[] = items.map((item, index) => ({
    ...item,
    number: index + 1,
    trash: <Icon icon="trashcan" size="2rem" />,
  }));

  return (
    <TabTemplate description="Description" onCreate={() => {}}>
      <TabForm buttonText="조회하기">
        <Style.InputWrapper>
          <Input label="라이선스명" value="" onChange={() => {}} />
          <Dropdown label="라이선스 타입" width="15rem" items={[]} onClickItem={() => {}} />
          <Dropdown label="규제" width="25rem" items={[]} onClickItem={() => {}} />
        </Style.InputWrapper>
      </TabForm>
      <Style.TableWrapper>
        <Table title="라이선스 목록" attributes={licenseListAttr} items={parsedItem} />
      </Style.TableWrapper>
    </TabTemplate>
  );
}

export default LicenseListTab;
