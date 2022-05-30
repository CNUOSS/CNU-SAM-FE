import React, { useState } from 'react';
import TabTemplate from '@components/templates/TabTemplate';
import Table, { SearchInfoType } from './Table';
import Input from '@components/widgets/Input';
import TabForm from '@components/widgets/TabForm';
import Dropdown from '@components/widgets/Dropdown';
import AddManagedSWModal from '@components/modals/AddManagedSWModal';
import AsyncBoundaryWrapper from '@components/containers/AsyncBoundaryWrapper';
import * as Style from './styled';
import { RegistrationSWType } from '@@types/client';
import useForm from '@hooks/useForm';

function RegistrationSWTab() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<RegistrationSWType>();
  const { change, getValue, getAllValue } = useForm<SearchInfoType>();
  const [infoStore, setInfoStore] = useState<SearchInfoType>({
    swMfr: '',
    swName: '',
  });

  const addNewSW = () => {};
  const onDelete = () => {};
  const toggleModal = () => {
    setIsOpen((prev) => !prev);
    setSelectedItem(undefined);
  };
  const onRowClick = (item: RegistrationSWType) => {
    toggleModal();
    setSelectedItem(item);
  };
  const handleSearch = () => setInfoStore((store) => ({ ...store, ...getAllValue() }));

  return (
    <>
      {isOpen && (
        <AddManagedSWModal
          defaultCompanyList={[]}
          defaultCompanyIndex={0}
          defaultSWName={selectedItem?.swName}
          isEditable={!!selectedItem}
          closeModal={toggleModal}
          onSubmit={addNewSW}
          onDelete={onDelete}
        />
      )}
      <TabTemplate description="Description" onCreate={toggleModal}>
        <TabForm onSubmit={handleSearch} buttonText="조회하기">
          <Style.InputWrapper>
            <Dropdown label="제조사" items={[]} width="21rem" onClickItem={() => {}} />
            <Input label="제품명" value={getValue('swName')} width="21rem" onChange={change('swName')} />
          </Style.InputWrapper>
        </TabForm>
        <AsyncBoundaryWrapper>
          <Style.TableWrapper>
            <Table searchInfo={infoStore} onRowClick={onRowClick} />
          </Style.TableWrapper>
        </AsyncBoundaryWrapper>
      </TabTemplate>
    </>
  );
}

export default RegistrationSWTab;
