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
import Restrictions from './Restrictions';

// Libs
import AsyncBoundary from '@libs/AsyncBoundary';

// Apis
import { getLicenseTypesAPI } from '@apis/data';
import { createLicenseAPI, getLicenseListAPI, LicenseType } from '@apis/license';

// Styles
import * as Style from './styled';

interface AddLicenseModalInterface {
  onCreate: () => void;
  closeModal: () => void;
}

type InputsType = Omit<LicenseType, 'id'>;

// TODO: add check empty request - use useForm
function AddLicenseModal({ onCreate, closeModal }: AddLicenseModalInterface) {
  const queryClient = useQueryClient();
  const createMutationSuccess = async () => {
    await queryClient.invalidateQueries(getLicenseListAPI);
    closeModal();
  };
  const { mutate } = useMutation<LicenseType>(createLicenseAPI.url, createLicenseAPI.method, createMutationSuccess);
  // TODO: error handling
  const { change, handleSubmit, getValue, control } = useForm<InputsType>({
    licenseName: [{ error: 'required' }],
  });
  const { toggle } = useFieldArray<InputsType>({ control, name: 'restrictions' });
  const onSubmit = (data: InputsType) => mutate(data);

  const selectRestriction = (restriction: string) => toggle(restriction);
  const selectLicenseType = (type: string) => change('licenseType')({ target: { value: type } });

  return (
    <Template closeModal={closeModal}>
      <Style.Container>
        <Style.Header>라이선스 생성하기</Style.Header>
        <Style.Description>화이팅</Style.Description>
        <Style.InputWrapper>
          <Input label="라이선스명" width="20rem" value={getValue('licenseName')} onChange={change('licenseName')} />
          {/* FIXME: Insert asyncboundary inside */}
          <AsyncBoundary pendingFallback={<>loading</>} rejectedFallback={Error}>
            <DropdownContainer
              label="라이선스 타입"
              width="18rem"
              getUrl={getLicenseTypesAPI}
              onClickItem={selectLicenseType}
            />
          </AsyncBoundary>
          <Input label="라이선스 url" width="50.3rem" value={getValue('licenseUrl')} onChange={change('licenseUrl')} />
        </Style.InputWrapper>
        <Style.RestrictionTitle>규제</Style.RestrictionTitle>
        {/* FIXME: Insert asyncboundary inside */}
        <AsyncBoundary pendingFallback={<>loading</>} rejectedFallback={Error}>
          <Restrictions selectItem={selectRestriction} />
        </AsyncBoundary>
        <Style.ButtonWrapper>
          <Button onClick={handleSubmit(onSubmit)}>등록하기</Button>
        </Style.ButtonWrapper>
      </Style.Container>
    </Template>
  );
}

export default AddLicenseModal;
