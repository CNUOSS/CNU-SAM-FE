import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import TabTemplate from '@components/templates/TabTemplate';
import Input from '@components/widgets/Input';
import Dropdown from '@components/widgets/Dropdown';
import TabForm from '@components/widgets/TabForm';
import Table from '@components/widgets/Table';
import AddManagedSWModal from '@components/modals/AddManagedSWModal';
import AddOrUpdateLectureSWTab from '@components/containers//AddOrUpdateLectureSWTab';
import { TotalLectureSWListAttr } from '@@types/types';
import { totalLectureSWListAttr } from '@common/constants';
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
  [key in TotalLectureSWListAttr]: string | boolean;
};

// FIXME: remove this
interface TotalLectureSWListProps {
  items: ItemType[];
  isAdmin: boolean;
}

function TotalLectureSWListTab({ items, isAdmin }: TotalLectureSWListProps) {
  const [selectedItem, setSelectedItem] = useState<ItemType>();
  const setTabState = useSetRecoilState(tabState);
  // FIXME: not this list, list fetched from server. here is not exist all manufacturing's information
  const manufacturingList = items.map((item) => item.manufacturing as string);

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

  const getNewManaged = (managed: boolean | string, onClick: () => void) => {
    if (!managed) return 'No';
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

  const parsedItem = items.map(({ managed, ...others }) => {
    const newManaged = getNewManaged(managed, clickItemAddButton({ managed, ...others }));
    return { ...others, managed: newManaged };
  });

  const closeModal = () => setSelectedItem(undefined);
  const addNewManagedSW = () => {};
  const searchList = () => {};

  return (
    <>
      {selectedItem && (
        <AddManagedSWModal
          defaultCompanyList={manufacturingList}
          defaultCompanyIndex={manufacturingList.findIndex(
            (manufacturing) => manufacturing === selectedItem.manufacturing
          )}
          defaultSWName={selectedItem.swName as string}
          onSubmit={addNewManagedSW}
          closeModal={closeModal}
        />
      )}
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
          <Table
            title="등록된 수업용 SW"
            items={parsedItem}
            attributes={totalLectureSWListAttr}
            onRowClick={clickItem}
          />
        </Style.TableWrapper>
      </TabTemplate>
    </>
  );
}

export default TotalLectureSWListTab;
