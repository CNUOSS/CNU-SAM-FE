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
import { createLicenseRequestClient2Server } from '@converter/license';
import { getLicenseTypesResponseServer2Client } from '@converter/data';

// Styles
import { DESCRIPTION, LicenseListTableLabelType } from '@common/constants';
import { LicenseType } from '@@types/client';
import * as Style from './styled';

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
    licenseName: '???????????????',
    licenseUrl: '???????????? ??????',
    licenseType: '???????????? ??????',
  };

  const onSubmit = (data: InputsType) => mutate(data);
  const selectRestriction = (restriction: string) => toggle(restriction);
  const selectLicenseType = (type: string) => change('licenseType')(type);

  return (
    <Template closeModal={closeModal}>
      <Style.Container>
        <Style.Header>???????????? ????????????</Style.Header>
        <Style.Description>{DESCRIPTION.addLicenseModal}</Style.Description>
        <Style.InputWrapper>
          <Input label="???????????????" width="20rem" value={getValue('licenseName')} onChange={change('licenseName')} />
          <DropdownContainer
            label="???????????? ??????"
            width="18rem"
            getUrl={getLicenseTypesAPI}
            responseConverter={getLicenseTypesResponseServer2Client}
            onClickItem={selectLicenseType}
          />
          <Input label="???????????? url" width="50.3rem" value={getValue('licenseUrl')} onChange={change('licenseUrl')} />
        </Style.InputWrapper>
        <Style.RestrictionTitle>??????</Style.RestrictionTitle>
        <AsyncBoundary pendingFallback={<LoadingModal />} rejectedFallback={Error}>
          <Restrictions selectItem={selectRestriction} />
        </AsyncBoundary>
        {error && <Style.Error>{`${nameMapper[error.key]}???(???) ???????????????`}</Style.Error>}
        <Style.ButtonWrapper>
          <Button onClick={handleSubmit(onSubmit)}>????????????</Button>
        </Style.ButtonWrapper>
      </Style.Container>
    </Template>
  );
}

export default AddLicenseModal;
