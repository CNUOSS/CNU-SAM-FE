import React, { useState } from 'react';
import TabTemplate from '../../templates/TabTemplate';
import Table from '../../widgets/Table';
import Input from '../../widgets/Input';
import TabForm from '../../widgets/TabForm';
import Dropdown from '../../widgets/Dropdown';
import { subscibedSWListAttr } from '../../../common/constants';
import { SubscribedSWListAttr, Number } from '../../../@types/types';
import AddOrUpdateSubscribedSWModal from '../../modals/AddOrUpdateSubscribedSWModal';
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

  const handleModalSubmit = () => {};
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
          defaultLicense={selectedItem?.license}
          defaultSWName={selectedItem?.swName}
          defaultExpireDate={selectedItem?.expireDt}
          modalState={selectedItem ? 'update' : 'create'}
          onSubmit={handleModalSubmit}
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
