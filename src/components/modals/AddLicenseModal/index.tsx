// Dependencies
import React from 'react';
import { useQueryClient } from 'react-query';
import useForm from '@hooks/useForm';
import useFieldArray from '@hooks/useFieldArray';
import useMutation from '@hooks/useMutation';

// Components
import Template from '@components/templates/ModalTemplate';
import DropdownContainer from '@components/containers/DropdownContainer';
import Error from '@components/widgets/Error';
import Input from '@components/widgets/Input';
import Button from '@components/widgets/Button';
import LoadingModal from '../LoadingModal';
import Restrictions from './Restrictions';

// Libs
import AsyncBoundary from '@libs/AsyncBoundary';

// Apis
import { getLicenseTypesAPI } from '@apis/data';
import { createLicenseAPI, getLicenseListAPI } from '@apis/license';

// Styles
import { getLicenseTypesResponseServer2Client } from '@converter/data';
import { createLicenseRequestClient2Server } from '@converter/license';
import { LicenseType } from '@@types/client';
import * as Style from './styled';
import { LicenseListTableLabelType } from '@common/constants';

interface AddLicenseModalInterface {
  closeModal: () => void;
}

type InputsType = Omit<LicenseType, 'id'>;

function AddLicenseModal({ closeModal }: AddLicenseModalInterface) {
  const queryClient = useQueryClient();
  const createMutationSuccess = async () => {
    await queryClient.invalidateQueries(getLicenseListAPI);
    closeModal();
  };
  const { mutate } = useMutation<LicenseType>({
    url: createLicenseAPI.url,
    method: createLicenseAPI.method,
    onSuccess: createMutationSuccess,
    converter: {
      request: createLicenseRequestClient2Server,
    },
  });
  const { change, handleSubmit, getValue, control, error } = useForm<InputsType>({
    licenseName: [{ error: 'required' }],
    licenseUrl: [{ error: 'required' }],
    licenseType: [{ error: 'required' }],
  });
  const { toggle } = useFieldArray<InputsType>({ control, name: 'restrictions' });

  const nameMapper: { [key in keyof InputsType]?: LicenseListTableLabelType } = {
    licenseName: '라이선스명',
    licenseUrl: '라이선스 주소',
    licenseType: '라이선스 타입',
  };

  const onSubmit = (data: InputsType) => mutate(data);
  const selectRestriction = (restriction: string) => toggle(restriction);
  const selectLicenseType = (type: string) => change('licenseType')(type);

  return (
    <Template closeModal={closeModal}>
      <Style.Container>
        <Style.Header>라이선스 생성하기</Style.Header>
        <Style.Description>화이팅</Style.Description>
        <Style.InputWrapper>
          <Input label="라이선스명" width="20rem" value={getValue('licenseName')} onChange={change('licenseName')} />
          <DropdownContainer
            label="라이선스 타입"
            width="18rem"
            getUrl={getLicenseTypesAPI}
            responseConverter={getLicenseTypesResponseServer2Client}
            onClickItem={selectLicenseType}
          />
          <Input label="라이선스 url" width="50.3rem" value={getValue('licenseUrl')} onChange={change('licenseUrl')} />
        </Style.InputWrapper>
        <Style.RestrictionTitle>규제</Style.RestrictionTitle>
        <AsyncBoundary pendingFallback={<LoadingModal />} rejectedFallback={Error}>
          <Restrictions selectItem={selectRestriction} />
        </AsyncBoundary>
        {error && <Style.Error>{`${nameMapper[error.key]}을(를) 채워주세요`}</Style.Error>}
        <Style.ButtonWrapper>
          <Button onClick={handleSubmit(onSubmit)}>등록하기</Button>
        </Style.ButtonWrapper>
      </Style.Container>
    </Template>
  );
}

export default AddLicenseModal;
