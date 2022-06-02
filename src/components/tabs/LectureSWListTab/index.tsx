import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import TabTemplate from '@components/templates/TabTemplate';
import Input from '@components/widgets/Input';
import Dropdown from '@components/widgets/Dropdown';
import TabForm from '@components/widgets/TabForm';
import Table, { ItemType, SearchInfoType } from './Table';
import AddOrUpdateRegistrationSWModal from '@components/modals/AddOrUpdateRegistrationSWModal';
import AddOrUpdateLectureSWTab from '@components/tabs//AddOrUpdateLectureSWTab';
import { tabState } from '@recoil/tab';
import { compareTabs } from '@utils/manage-tabs';
import * as Style from './styled';
import useForm from '@hooks/useForm';
import AsyncBoundaryWrapper from '@components/containers/AsyncBoundaryWrapper';

// FIXME: remove
const year = new Date().getFullYear();
const ORGANIZATION = ['학부', '공과대학원'];
const SEMESTER = ['1학기', '2학기', '계절학기'];
const DIVISION = ['전공(핵심)', '교양(필수)'];
const YEARS = [year - 1, year, year + 1].map((year) => String(year));

function LectureSWListTab() {
  const { change, getValue, getAllValue } = useForm<SearchInfoType>();
  const [selectedItem, setSelectedItem] = useState<ItemType>();
  const setTabState = useSetRecoilState(tabState);
  const [infoStore, setInfoStore] = useState<SearchInfoType>({
    department: '',
    year: '',
    semester: '',
    lectureType: '',
    lectureName: '',
    lectureNum: '',
    owner: '',
  });

  const clickItemAddButton = (item: ItemType) => () => setSelectedItem(item);
  const clickItem = (item: any) => {
    setTabState((oldState) =>
      compareTabs(
        oldState,
        '강의 수정',
        <AddOrUpdateLectureSWTab tabState="update" manufacturingList={[]} swNames={[]} />
      )
    );
  };

  const closeModal = () => setSelectedItem(undefined);
  const handleSearch = () => setInfoStore((store) => ({ ...store, ...getAllValue() }));

  return (
    <>
      {selectedItem && <AddOrUpdateRegistrationSWModal closeModal={closeModal} />}
      <TabTemplate description="Description">
        <TabForm onSubmit={handleSearch} buttonText="조회하기">
          <Dropdown items={ORGANIZATION} label="조직분류" width="16rem" onClickItem={() => {}} />
          <Dropdown items={YEARS} label="년도" width="10rem" onClickItem={() => {}} />
          <Dropdown items={SEMESTER} label="학기" width="8rem" onClickItem={() => {}} />
          <Dropdown items={DIVISION} label="이수구분" width="13rem" onClickItem={() => {}} />
          <Input value={getValue('lectureName')} label="과목이름" width="20rem" onChange={change('lectureName')} />
          <Input value={getValue('lectureNum')} label="과목번호" width="14rem" onChange={change('lectureNum')} />
          <Input value={getValue('owner')} label="등록자" width="14rem" onChange={change('owner')} />
        </TabForm>
        <AsyncBoundaryWrapper>
          <Style.TableWrapper>
            <Table searchInfo={infoStore} clickItem={clickItem} clickItemAddButton={clickItemAddButton} />
          </Style.TableWrapper>
        </AsyncBoundaryWrapper>
      </TabTemplate>
    </>
  );
}

export default LectureSWListTab;
