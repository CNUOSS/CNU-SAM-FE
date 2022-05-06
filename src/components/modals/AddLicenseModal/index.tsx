// Dependencies
import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import useMutation from '../../../hooks/useMutation';
import * as Style from './styled';

// Components
import Template from '../../templates/ModalTemplate';
import DropdownContainer from '../../containers/DropdownContainer';
import Error from '../../widgets/Error';
import Input from '../../widgets/Input';
import Button from '../../widgets/Button';
import Restrictions from './Restrictions';

// Libs
import AsyncBoundary from '../../../libs/AsyncBoundary';

// Apis
import { getLicenseTypesAPI } from '../../../apis/data';
import { createLicenseAPI, getLicenseListAPI, LicenseType } from '../../../apis/license';

// Utils
import { inOrOut } from '../../../utils/module';

interface AddLicenseModalInterface {
  onCreate: () => void;
  closeModal: () => void;
}

// TODO: add check empty request - use useForm
function AddLicenseModal({ onCreate, closeModal }: AddLicenseModalInterface) {
  const queryClient = useQueryClient();
  const [license, setLicense] = useState<Omit<LicenseType, 'id'>>({
    licenseName: '',
    licenseType: '',
    licenseUrl: '',
    restrictions: [],
  });
  const createMutationSuccess = async () => {
    await queryClient.invalidateQueries(getLicenseListAPI);
    closeModal();
  };
  const { mutate } = useMutation<LicenseType>(createLicenseAPI.url, createLicenseAPI.method, createMutationSuccess);

  const changeLicenseName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLicense((info) => ({ ...info, licenseName: event.target.value }));
  const changeLicenseUrl = (event: React.ChangeEvent<HTMLInputElement>) =>
    setLicense((info) => ({ ...info, licenseUrl: event.target.value }));
  const selectLicenseRestriction = (restriction: string) =>
    setLicense((info) => ({ ...info, restrictions: inOrOut(info.restrictions, restriction) }));
  const selectLicenseType = (licenseType: string) => setLicense((info) => ({ ...info, licenseType }));

  const handleCreateLicense = () => {
    mutate(license);
    onCreate();
  };

  return (
    <Template closeModal={closeModal}>
      <Style.Container>
        <Style.Header>라이선스 생성하기</Style.Header>
        <Style.Description>화이팅</Style.Description>
        <Style.InputWrapper>
          <Input label="라이선스명" width="20rem" value={license.licenseName} onChange={changeLicenseName} />
          {/* FIXME: Insert asyncboundary inside */}
          <AsyncBoundary pendingFallback={<>loading</>} rejectedFallback={Error}>
            <DropdownContainer
              label="라이선스 타입"
              width="18rem"
              getUrl={getLicenseTypesAPI}
              onClickItem={selectLicenseType}
            />
          </AsyncBoundary>
          <Input label="라이선스 url" width="50.3rem" value={license.licenseUrl} onChange={changeLicenseUrl} />
        </Style.InputWrapper>
        <Style.RestrictionTitle>규제</Style.RestrictionTitle>
        {/* FIXME: Insert asyncboundary inside */}
        <AsyncBoundary pendingFallback={<>loading</>} rejectedFallback={Error}>
          <Restrictions selectItem={selectLicenseRestriction} />
        </AsyncBoundary>
        <Style.ButtonWrapper>
          <Button onClick={handleCreateLicense}>등록하기</Button>
        </Style.ButtonWrapper>
      </Style.Container>
    </Template>
  );
}

export default AddLicenseModal;
