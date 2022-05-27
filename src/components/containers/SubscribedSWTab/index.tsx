import React, { useState } from 'react';
import TabTemplate from '@components/templates/TabTemplate';
import Table, { ItemType } from './Table';
import Input from '@components/widgets/Input';
import TabForm from '@components/widgets/TabForm';
import Error from '@components/widgets/Error';
import AddOrUpdateSubscribedSWModal from '@components/modals/AddOrUpdateSubscribedSWModal';
import * as Style from './styled';
import AsyncBoundary from '@libs/AsyncBoundary';
import LoadingModal from '@components/modals/LoadingModal';

function SubscribedSWTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemType>();

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
          <Input label="제품군" value="" width="21rem" onChange={() => {}} />
          <Input label="제조사" value="" width="21rem" onChange={() => {}} />
          <Input label="제품명" value="" width="21rem" onChange={() => {}} />
        </TabForm>
        <AsyncBoundary pendingFallback={<LoadingModal />} rejectedFallback={Error}>
          <Style.TableWrapper>
            <Table onRowClick={clickItem} />
          </Style.TableWrapper>
        </AsyncBoundary>
      </TabTemplate>
    </>
  );
}

export default SubscribedSWTab;
