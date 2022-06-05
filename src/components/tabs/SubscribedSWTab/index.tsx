import React, { useState } from 'react';
import AsyncBoundary from '@libs/AsyncBoundary';
import Table, { SearchInfoType } from './Table';
import Input from '@components/widgets/Input';
import TabForm from '@components/widgets/TabForm';
import Error from '@components/widgets/Error';
import TabTemplate from '@components/templates/TabTemplate';
import LoadingModal from '@components/modals/LoadingModal';
import AddOrUpdateSubscribedSWModal from '@components/modals/AddOrUpdateSubscribedSWModal';
import useForm from '@hooks/useForm';
import { SubscribedSWType } from '@@types/client';
import { DESCRIPTION } from '@common/constants';
import * as Style from './styled';

function SubscribedSWTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<SubscribedSWType>();
  const { change, getValue, getAllValue } = useForm<SearchInfoType>();
  const [infoStore, setInfoStore] = useState<SearchInfoType>({
    swMfr: '',
    swName: '',
    swType: '',
  });

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
    setSelectedItem(undefined);
  };
  const clickItem = (item: SubscribedSWType) => {
    toggleModal();
    setSelectedItem(item);
  };
  const handleSearch = () => setInfoStore((store) => ({ ...store, ...getAllValue() }));

  return (
    <>
      {isOpen && <AddOrUpdateSubscribedSWModal subscribedSW={selectedItem} closeModal={toggleModal} />}
      <TabTemplate description={DESCRIPTION.subscribedSWTab} onCreate={toggleModal}>
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
