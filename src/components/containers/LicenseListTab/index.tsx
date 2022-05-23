// Dependencies
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
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
import useMutation from '@hooks/useMutation';

// Apis
import { deleteLicenseAPI, getLicenseListAPI } from '@apis/license';

// Others
import { getLicenseTypesResponseServer2Client, getRestrictionResponseServer2Client } from '@converter/data';
import * as Style from './styled';

type ModalType = 'add' | 'none' | number;

function LicenseListTab() {
  const queryClient = useQueryClient();
  const { change, getValue, getAllValue } = useForm<SearchInfoType>();
  const [modalState, setModalState] = useState<ModalType>('none');
  const [infoStore, setInfoStore] = useState<SearchInfoType>({
    licenseName: '',
    licenseType: '',
    restriction: '',
  });
  const deleteMutationSuccess = async () => {
    await queryClient.invalidateQueries(getLicenseListAPI);
    closeModal();
  };
  const { mutate } = useMutation({
    url: deleteLicenseAPI.url(0),
    method: deleteLicenseAPI.method,
    onSuccess: deleteMutationSuccess,
  });

  const closeModal = () => setModalState('none');
  const openAddLicenseModal = () => setModalState('add');
  const openDeleteModal = (licenseId: number) => setModalState(licenseId);

  const selectRestriction = (restriction: string) => change('restriction')(restriction);
  const selectLicenseType = (licenseType: string) => change('licenseType')(licenseType);

  const handleSearch = () => setInfoStore((store) => ({ ...store, ...getAllValue() }));
  const deleteLicense = () => {
    mutate({ dynamicUrl: deleteLicenseAPI.url(modalState as number) });
    setModalState('none');
  };

  return (
    <>
      {modalState === 'add' && <AddLicenseModal closeModal={closeModal} />}
      {typeof modalState === 'number' && <DeleteModal closeModal={closeModal} onDelete={deleteLicense} />}
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
