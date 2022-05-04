// Dependencies
import React, { useState } from 'react';
import TabTemplate from '../../templates/TabTemplate';
import AsyncBoundary from '../../../libs/AsyncBoundary';
import * as Style from './styled';

// Widgets
import Table from './Table';
import Input from '../../widgets/Input';
import TabForm from '../../widgets/TabForm';
import Dropdown from '../../widgets/Dropdown';

// Modals
import AddLicenseModal from '../../modals/AddLicenseModal';
import DeleteModal from '../../modals/DeleteModal';
import Error from '../../widgets/Error';

type ModalType = 'add' | 'delete' | 'none';

function LicenseListTab() {
  const [modalState, setModalState] = useState<ModalType>('none');

  const closeModal = () => setModalState('none');
  const openAddLicenseModal = () => setModalState('add');
  const openDeleteModal = () => setModalState('delete');

  return (
    <>
      {modalState === 'add' && <AddLicenseModal closeModal={closeModal} onCreate={() => {}} />}
      {modalState === 'delete' && <DeleteModal closeModal={closeModal} onDelete={() => {}} />}
      <TabTemplate description="Description" onCreate={openAddLicenseModal}>
        <TabForm buttonText="조회하기">
          <Style.InputWrapper>
            <Input label="라이선스명" value="" onChange={() => {}} />
            <Dropdown label="라이선스 타입" width="15rem" items={[]} onClickItem={() => {}} />
            <Dropdown label="규제" width="25rem" items={[]} onClickItem={() => {}} />
          </Style.InputWrapper>
        </TabForm>
        <AsyncBoundary pendingFallback={<>loading</>} rejectedFallback={Error}>
          <Style.TableWrapper>
            <Table openDeleteModal={openDeleteModal} />
          </Style.TableWrapper>
        </AsyncBoundary>
      </TabTemplate>
    </>
  );
}

export default LicenseListTab;
