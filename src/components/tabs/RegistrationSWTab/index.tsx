import React, { useState } from 'react';
import TabTemplate from '@components/templates/TabTemplate';
import Table from '@components/widgets/Table';
import Input from '@components/widgets/Input';
import TabForm from '@components/widgets/TabForm';
import Dropdown from '@components/widgets/Dropdown';
import AddManagedSWModal from '@components/modals/AddManagedSWModal';
import { registrationSWListAttr } from '@common/constants';
import { RegistrationSWListAttr, Number } from '@@types/types';
import * as Style from './styled';

export type ItemType = {
  [key in RegistrationSWListAttr]: string;
};

export interface RowType extends ItemType {
  [Number]: number;
}

interface RegistrationSWTabProps {
  // FIXME: remove all
  items: ItemType[];
  manufacturings: string[];
}

function RegistrationSWTab({ items, manufacturings }: RegistrationSWTabProps) {
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
          defaultCompanyList={manufacturings}
          defaultCompanyIndex={manufacturings.findIndex(
            (manufacturing) => manufacturing === selectedItem?.manufacturing
          )}
          defaultSWName={selectedItem?.swName}
          isEditable={!!selectedItem}
          closeModal={toggleModal}
          onSubmit={addNewSW}
          onDelete={onDelete}
        />
      )}
      <TabTemplate description="Description" onCreate={toggleModal}>
        <TabForm onSubmit={onSubmit} buttonText="조회하기">
          <Style.InputWrapper>
            <Dropdown label="제조사" items={manufacturings} width="21rem" onClickItem={() => {}} />
            <Input label="제품명" value="" width="21rem" onChange={() => {}} />
          </Style.InputWrapper>
        </TabForm>
        <Style.TableWrapper>
          <Table title="수업용 SW관리" attributes={registrationSWListAttr} items={parsedItems} onRowClick={clickItem} />
        </Style.TableWrapper>
      </TabTemplate>
    </>
  );
}

export default RegistrationSWTab;
