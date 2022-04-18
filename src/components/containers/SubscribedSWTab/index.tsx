import React, { useState } from 'react';
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
  companys: string[];
  productFamilys: string[];
}

function SubscribedSWTab({ items, companys, productFamilys }: SubscribedSWTabProps) {
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

  return (
    <>
      {isOpen && (
        <AddOrUpdateSubscribedSWModal
          modalState={selectedItem ? 'update' : 'create'}
          onSubmit={handleModalSubmit}
          onDelete={onDelete}
          closeModal={toggleModal}
        />
      )}
      <Style.Container>
        <Style.DescriptionWrapper>
          <Style.Description>Description</Style.Description>
          <Style.EnrollButton onClick={toggleModal}>등록하기</Style.EnrollButton>
        </Style.DescriptionWrapper>
        <TabForm onSubmit={handleSearchSW} buttonText="조회하기">
          <Dropdown label="제품군" items={productFamilys} width="21rem" onClickItem={() => {}} />
          <Dropdown label="제조사" items={companys} width="21rem" onClickItem={() => {}} />
          <Input label="제품명" value="" width="21rem" onChange={() => {}} />
        </TabForm>
        <Style.TableTitle>학내 구독 중인 SW</Style.TableTitle>
        <Style.TableWrapper>
          <Table attributes={subscibedSWListAttr} items={parsedItems} />
        </Style.TableWrapper>
      </Style.Container>
    </>
  );
}

export default SubscribedSWTab;
