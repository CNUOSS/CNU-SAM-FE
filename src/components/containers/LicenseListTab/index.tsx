// Dependencies
import React, { useState } from 'react';
import AsyncBoundary from '@libs/AsyncBoundary';
import { getRestrictionsAPI, getLicenseTypesAPI } from '@apis/data';

// Components
import TabTemplate from '@components/templates/TabTemplate';
import Input from '@components/widgets/Input';
import TabForm from '@components/widgets/TabForm';
import Error from '@components/widgets/Error';
import LoadingModal from '@components/modals/LoadingModal';
import AddLicenseModal from '@components/modals/AddLicenseModal';
import DeleteModal from '@components/modals/DeleteModal';
import DropdownContainer from '@components/containers/DropdownContainer';
import Table, { SearchInfoType } from './Table';

// Hooks
import useForm from '@hooks/useForm';

// Others
import { getLicenseTypesResponseServer2Client, getRestrictionResponseServer2Client } from '@converter/data';
import * as Style from './styled';

type ModalType = 'add' | 'delete' | 'none';

function LicenseListTab() {
  const { change, getValue, getAllValue } = useForm<SearchInfoType>();
  const [modalState, setModalState] = useState<ModalType>('none');
  const [infoStore, setInfoStore] = useState<SearchInfoType>({
    licenseName: '',
    licenseType: '',
    restriction: '',
  });

  const closeModal = () => setModalState('none');
  const openAddLicenseModal = () => setModalState('add');
  const openDeleteModal = () => setModalState('delete');

  const selectRestriction = (restriction: string) => change('restriction')(restriction);
  const selectLicenseType = (licenseType: string) => change('licenseType')(licenseType);

  const handleSearch = () => setInfoStore((store) => ({ ...store, ...getAllValue() }));

  return (
    <>
      {modalState === 'add' && <AddLicenseModal closeModal={closeModal} onCreate={() => {}} />}
      {modalState === 'delete' && <DeleteModal closeModal={closeModal} onDelete={() => {}} />}
      <TabTemplate description="Description" onCreate={openAddLicenseModal}>
        <TabForm buttonText="조회하기" onSubmit={handleSearch}>
          <Style.InputWrapper>
            <Input label="라이선스명" value={getValue('licenseName')} onChange={change('licenseName')} />
            <DropdownContainer
              label="타입"
              width="15rem"
              getUrl={getLicenseTypesAPI}
              responseConverter={getLicenseTypesResponseServer2Client}
              onClickItem={selectLicenseType}
            />
            <DropdownContainer
              label="규제"
              width="25rem"
              getUrl={getRestrictionsAPI}
              responseConverter={getRestrictionResponseServer2Client}
              onClickItem={selectRestriction}
            />
          </Style.InputWrapper>
        </TabForm>
        <AsyncBoundary pendingFallback={<LoadingModal />} rejectedFallback={Error}>
          <Style.TableWrapper>
            <Table searchInfo={infoStore} openDeleteModal={openDeleteModal} />
          </Style.TableWrapper>
        </AsyncBoundary>
      </TabTemplate>
    </>
  );
}

export default LicenseListTab;
