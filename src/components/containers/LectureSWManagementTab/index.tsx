import React, { useState } from 'react';
import TabTemplate from '../../templates/TabTemplate';
import Table from '../../widgets/Table';
import Input from '../../widgets/Input';
import TabForm from '../../widgets/TabForm';
import Dropdown from '../../widgets/Dropdown';
import { lectureSWManagementListAttr } from '../../../common/constants';
import { LectureSWManagementListAttr, Number } from '../../../@types/types';
import * as Style from './styled';
import AddManagedSWModal from '../../modals/AddManagedSWModal';

export type ItemType = {
  [key in LectureSWManagementListAttr]: string;
};

export interface RowType extends ItemType {
  [Number]: number;
}

interface LecutreSWManagementTabProps {
  // FIXME: remove all
  items: ItemType[];
  companys: string[];
}

function LectureSWManagementTab({ items, companys }: LecutreSWManagementTabProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemType>();
  const parsedItems: RowType[] = items.map((item, index) => ({ ...item, number: index + 1 }));

  const onSubmit = () => {};
  const addNewSW = () => {};
  const onDelete = () => {};
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
    setSelectedItem(undefined);
  };
  const clickItem = (item: ItemType) => {
    toggleModal();
    setSelectedItem(item);
  };

  return (
    <>
      {isOpen && (
        <AddManagedSWModal
          defaultCompanyList={companys}
          defaultCompanyIndex={companys.findIndex((company) => company === selectedItem?.company)}
          defaultSWName={selectedItem?.product}
          isEditable={!!selectedItem}
          closeModal={toggleModal}
          onSubmit={addNewSW}
          onDelete={onDelete}
        />
      )}
      <TabTemplate description="Description" onCreate={toggleModal}>
        <TabForm onSubmit={onSubmit} buttonText="조회하기">
          <Style.InputWrapper>
            <Dropdown label="제조사" items={companys} width="21rem" onClickItem={() => {}} />
            <Input label="제품명" value="" width="21rem" onChange={() => {}} />
          </Style.InputWrapper>
        </TabForm>
        <Style.TableTitle>수업용 SW관리</Style.TableTitle>
        <Style.TableWrapper>
          <Table attributes={lectureSWManagementListAttr} items={parsedItems} onRowClick={clickItem} />
        </Style.TableWrapper>
      </TabTemplate>
    </>
  );
}

export default LectureSWManagementTab;
