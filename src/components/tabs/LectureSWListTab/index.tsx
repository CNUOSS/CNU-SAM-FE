import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import TabTemplate from '@components/templates/TabTemplate';
import Input from '@components/widgets/Input';
import Dropdown from '@components/widgets/Dropdown';
import TabForm from '@components/widgets/TabForm';
import Table from '@components/widgets/Table';
import AddOrUpdateRegistrationSWModal from '@components/modals/AddOrUpdateRegistrationSWModal';
import AddOrUpdateLectureSWTab from '@components/tabs//AddOrUpdateLectureSWTab';
import { LectureSWListAttr } from '@@types/types';
import { lectureSWListAttr } from '@common/constants';
import { tabState } from '@recoil/tab';
import { compareTabs } from '@utils/manage-tabs';
import * as Style from './styled';

// FIXME: remove
const year = new Date().getFullYear();
const ORGANIZATION = ['학부', '공과대학원'];
const SEMESTER = ['1학기', '2학기', '계절학기'];
const DIVISION = ['전공(핵심)', '교양(필수)'];
const YEARS = [year - 1, year, year + 1].map((year) => String(year));

export type ItemType = {
  [key in LectureSWListAttr]: string | boolean;
};

// FIXME: remove this
interface LectureSWListProps {
  items: ItemType[];
  isAdmin: boolean;
}

function LectureSWListTab({ items, isAdmin }: LectureSWListProps) {
  const [selectedItem, setSelectedItem] = useState<ItemType>();
  const setTabState = useSetRecoilState(tabState);

  const clickItemAddButton = (item: ItemType) => () => setSelectedItem(item);
  const clickItem = (item: any) => {
    // TODO: if user, add authority compare logic
    setTabState((oldState) =>
      compareTabs(
        oldState,
        '강의 수정',
        <AddOrUpdateLectureSWTab tabState="update" manufacturingList={[]} swNames={[]} />
      )
    );
  };

  const getNewManaged = (isManaged: boolean | string, onClick: () => void) => {
    if (!isManaged) return 'No';
    if (!isAdmin) return 'Yes';
    const clickItem = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onClick();
    };
    return (
      <Style.AddButton data-testid="add-btn" onClick={clickItem}>
        추가
      </Style.AddButton>
    );
  };

  const parsedItem = items.map(({ isManaged, ...others }) => {
    const newManaged = getNewManaged(isManaged, clickItemAddButton({ isManaged, ...others }));
    return { ...others, isManaged: newManaged };
  });

  const closeModal = () => setSelectedItem(undefined);
  const searchList = () => {};

  return (
    <>
      {selectedItem && <AddOrUpdateRegistrationSWModal closeModal={closeModal} />}
      <TabTemplate description="Description">
        <TabForm onSubmit={searchList} buttonText="조회하기">
          <Dropdown items={ORGANIZATION} label="조직분류" width="16rem" onClickItem={() => {}} />
          <Dropdown items={YEARS} label="년도" width="10rem" onClickItem={() => {}} />
          <Dropdown items={SEMESTER} label="학기" width="8rem" onClickItem={() => {}} />
          <Dropdown items={DIVISION} label="이수구분" width="13rem" onClickItem={() => {}} />
          <Input value="" label="과목이름" width="20rem" onChange={() => {}} />
          <Input value="" label="과목번호" width="14rem" onChange={() => {}} />
          <Input value="" label="등록자" width="14rem" onChange={() => {}} />
        </TabForm>
        <Style.TableWrapper>
          <Table title="등록된 수업용 SW" items={parsedItem} attributes={lectureSWListAttr} onRowClick={clickItem} />
        </Style.TableWrapper>
      </TabTemplate>
    </>
  );
}

export default LectureSWListTab;
