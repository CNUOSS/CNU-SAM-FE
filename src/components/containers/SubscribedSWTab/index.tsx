import React, { useState } from 'react';
import TabTemplate from '@components/templates/TabTemplate';
import Table, { ItemType, SearchInfoType } from './Table';
import Input from '@components/widgets/Input';
import TabForm from '@components/widgets/TabForm';
import Error from '@components/widgets/Error';
import AddOrUpdateSubscribedSWModal from '@components/modals/AddOrUpdateSubscribedSWModal';
import * as Style from './styled';
import AsyncBoundary from '@libs/AsyncBoundary';
import LoadingModal from '@components/modals/LoadingModal';
import useForm from '@hooks/useForm';

function SubscribedSWTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ItemType>();
  const { change, getValue, getAllValue } = useForm<SearchInfoType>();
  const [infoStore, setInfoStore] = useState<SearchInfoType>({
    swMfr: '',
    swName: '',
    swType: '',
  });

  const onDelete = () => {};
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
    setSelectedItem(undefined);
  };
  const clickItem = (item: ItemType) => {
    toggleModal();
    setSelectedItem(item);
  };
  const handleSearch = () => setInfoStore((store) => ({ ...store, ...getAllValue() }));

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
        <TabForm onSubmit={handleSearch} buttonText="조회하기">
          <Input label="제품군" value={getValue('swType')} width="21rem" onChange={change('swType')} />
          <Input label="제조사" value={getValue('swMfr')} width="21rem" onChange={change('swMfr')} />
          <Input label="제품명" value={getValue('swName')} width="21rem" onChange={change('swName')} />
        </TabForm>
        <AsyncBoundary pendingFallback={<LoadingModal />} rejectedFallback={Error}>
          <Style.TableWrapper>
            <Table searchInfo={infoStore} onRowClick={clickItem} />
          </Style.TableWrapper>
        </AsyncBoundary>
      </TabTemplate>
    </>
  );
}

export default SubscribedSWTab;
