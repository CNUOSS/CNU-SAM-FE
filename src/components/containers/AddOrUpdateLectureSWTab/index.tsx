import React, { useState } from 'react';
import TabTemplate from '../../templates/TabTemplate';
import Dropdown from '../../widgets/Dropdown';
import TabForm from '../../widgets/TabForm';
import Button from '../../widgets/Button';
import Input from '../../widgets/Input';
import * as Style from './styled';
import Table, { ItemType } from './Table';

const year = new Date().getFullYear();
const ORGANIZATION = ['학부', '공과대학원'];
const SEMESTER = ['1학기', '2학기', '계절학기'];
const DIVISION = ['전공(핵심)', '교양(필수)'];
const YEARS = [year - 1, year, year + 1].map((year) => String(year));

export interface LectureSWType {
  organization: string;
  year: string;
  semester: string; // can be changed?
  division: string; // can be changed?
  lectureName: string;
  lectureNum: string;
  writer: string;
  receivedItems: ItemType[];
}

interface AddOrUpdateLectureSWTabProps {
  // FIXME: fetch infos about lecture
  lectureSW?: LectureSWType;
  manufacturingList: string[];
  swNames: string[];
  tabState: 'create' | 'update';
}

// FIXME: remove manufacturingList, swNames
function AddOrUpdateLectureSWTab({ lectureSW, manufacturingList, swNames, tabState }: AddOrUpdateLectureSWTabProps) {
  const [items, setItems] = useState<ItemType[]>(lectureSW?.receivedItems || []);

  const addNewItem = (newItem: ItemType) => setItems((prev) => [newItem, ...prev]);
  const deleteItem = (selectedIndex: number) => setItems((prev) => prev.filter((_, i: number) => i !== selectedIndex));

  return (
    <TabTemplate description="Description">
      <Style.FormTitleWrapper>
        <Style.FormTitle>수업 정보 작성</Style.FormTitle>
        <Style.ButtonWrapper>
          {tabState === 'create' && <Button onClick={() => {}}>등록하기</Button>}
          {tabState === 'update' && (
            <Button theme="warning" onClick={() => {}}>
              삭제하기
            </Button>
          )}
          {tabState === 'update' && <Button onClick={() => {}}>수정하기</Button>}
        </Style.ButtonWrapper>
      </Style.FormTitleWrapper>
      <TabForm>
        <Dropdown items={ORGANIZATION} label="조직분류" width="16rem" onClickItem={() => {}} />
        <Dropdown items={YEARS} label="년도" width="10rem" onClickItem={() => {}} />
        <Dropdown items={SEMESTER} label="학기" width="8rem" onClickItem={() => {}} />
        <Dropdown items={DIVISION} label="이수구분" width="13rem" onClickItem={() => {}} />
        <Input value={lectureSW?.lectureName || ''} label="과목이름" width="20rem" onChange={() => {}} />
        <Input value={lectureSW?.lectureNum || ''} label="과목번호" width="14rem" onChange={() => {}} />
        <Input value={lectureSW?.writer || ''} label="등록자" width="14rem" onChange={() => {}} />
      </TabForm>
      <Style.TableWrapper>
        <Table
          items={items}
          manufacturings={manufacturingList}
          swNames={swNames}
          onAddNewItem={addNewItem}
          onDeleteItem={deleteItem}
        />
      </Style.TableWrapper>
    </TabTemplate>
  );
}

export default AddOrUpdateLectureSWTab;
