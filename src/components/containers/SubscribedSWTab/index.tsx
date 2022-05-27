import React, { useState } from 'react';
import TabTemplate from '@components/templates/TabTemplate';
import Table from '@components/widgets/Table';
import Input from '@components/widgets/Input';
import TabForm from '@components/widgets/TabForm';
import Dropdown from '@components/widgets/Dropdown';
import AddOrUpdateSubscribedSWModal from '@components/modals/AddOrUpdateSubscribedSWModal';
import { subscibedSWListAttr } from '@common/constants';
import { SubscribedSWListAttr, Number } from '@@types/types';
import * as Style from './styled';

export type ItemType = {
  [key in SubscribedSWListAttr]: string;
};

export interface RowType extends ItemType {
  [Number]: number;
}

interface SubscribedSWTabProps {
  items: ItemType[];
  manufacturings: string[];
  types: string[];
}

function SubscribedSWTab({ items, manufacturings, types }: SubscribedSWTabProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemType>();
  const parsedItems: RowType[] = items.map((item, index) => ({ ...item, number: index + 1 }));

  const onDelete = () => {};
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
    setSelectedItem(undefined);
  };
  const handleSearchSW = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const clickItem = (item: ItemType) => {
    toggleModal();
    setSelectedItem(item);
  };

  return (
    <>
      {isOpen && (
        <AddOrUpdateSubscribedSWModal
          modalState={selectedItem ? 'update' : 'create'}
          onDelete={onDelete}
          closeModal={toggleModal}
        />
      )}
      <TabTemplate description="Description" onCreate={toggleModal}>
        <TabForm onSubmit={handleSearchSW} buttonText="조회하기">
          <Dropdown label="제품군" items={types} width="21rem" onClickItem={() => {}} />
          <Dropdown label="제조사" items={manufacturings} width="21rem" onClickItem={() => {}} />
          <Input label="제품명" value="" width="21rem" onChange={() => {}} />
        </TabForm>
        <Style.TableWrapper>
          <Table
            title="학내 구독 중인 SW"
            attributes={subscibedSWListAttr}
            items={parsedItems}
            onRowClick={clickItem}
          />
        </Style.TableWrapper>
      </TabTemplate>
    </>
  );
}

export default SubscribedSWTab;
