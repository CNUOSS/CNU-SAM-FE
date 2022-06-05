// Dependencies
import React from 'react';
import { useQueryClient } from 'react-query';

// Components
import Button from '@components/widgets/Button';
import Input from '@components/widgets/Input';
import Template from '@components/templates/ModalTemplate';
import SelfDropdownContainer from '@components/containers/SelfDropdownContainer';

// Apis
import {
  createRegistrationSWAPI,
  deleteRegistrationSWAPI,
  getRegistrationSWListAPI,
  updateRegistrationSWAPI,
} from '@apis/registrationsw';
import { getManufacturersNamesAPI } from '@apis/data';
import { getLectureSWListAPI } from '@apis/lecturesw';
import { getManufacturerNamesResponseServer2Client } from '@converter/data';
import {
  createRegistrationSWRequestClient2Server,
  updateRegistrationSWRequestClient2Server,
} from '@converter/registrationsw';

// Hooks
import useForm from '@hooks/useForm';
import useMutation from '@hooks/useMutation';

import { RegistrationSWType } from '@@types/client';
import { DESCRIPTION } from '@common/constants';
import { useAuth } from '@libs/auth';
import * as Style from './styled';

interface AddOrUpdateRegistrationSWModalProps {
  registrationSW?: RegistrationSWType;
  isFromLectureSWListTab?: boolean;
  closeModal: () => void;
}

type FormType = Pick<RegistrationSWType, 'swName' | 'swManufacturer'>;

function AddOrUpdateRegistrationSWModal({
  registrationSW,
  isFromLectureSWListTab,
  closeModal,
}: AddOrUpdateRegistrationSWModalProps) {
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const executeMutationSuccess = async () => {
    await queryClient.invalidateQueries(getRegistrationSWListAPI);
    await queryClient.invalidateQueries(getLectureSWListAPI);
    closeModal();
  };
  const { mutate: createMutate } = useMutation({
    url: createRegistrationSWAPI.url,
    method: createRegistrationSWAPI.method,
    onSuccess: executeMutationSuccess,
    converter: {
      request: createRegistrationSWRequestClient2Server,
    },
  });
  const { mutate: deleteMutate } = useMutation({
    url: deleteRegistrationSWAPI.url,
    method: deleteRegistrationSWAPI.method,
    onSuccess: executeMutationSuccess,
  });
  const { mutate: updateMutate } = useMutation({
    url: updateRegistrationSWAPI.url,
    method: updateRegistrationSWAPI.method,
    onSuccess: executeMutationSuccess,
    converter: { request: updateRegistrationSWRequestClient2Server },
  });
  const { change, getValue, error, handleSubmit } = useForm<FormType>(
    {
      swName: [{ error: 'required' }],
      swManufacturer: [{ error: 'required' }],
    },
    registrationSW ? { swName: registrationSW.swName, swManufacturer: registrationSW.swManufacturer } : {}
  );

  const selectManufacturer = (manufacturer: string) => change('swManufacturer')(manufacturer);
  const onSubmit = (data: FormType) => {
    if (!user) return;

    const isManaged = user.role === 'ADMIN';
    if (!registrationSW) createMutate({ ...data, isManaged, latestUpdaterId: user.id });
    else
      updateMutate({
        ...data,
        isManaged,
        id: registrationSW?.id,
        latestUpdaterId: user.id,
        dynamicUrl: updateRegistrationSWAPI.dynamicUrl(registrationSW.id),
      });
  };
  const onDelete = () => {
    if (registrationSW) deleteMutate({ dynamicUrl: deleteRegistrationSWAPI.dynamicUrl(registrationSW.id) });
  };

  const description =
    !registrationSW || isFromLectureSWListTab ? DESCRIPTION.addLectureSWModal : DESCRIPTION.updateLectureSWModal;
  return (
    <Template closeModal={closeModal}>
      <Style.Container>
        <Style.Header>수업 용 SW 관리 항목에 추가하기</Style.Header>
        <Style.Description>{description}</Style.Description>
        <Style.InputWrapper>
          <SelfDropdownContainer
            label="SW 제조사"
            defaultItem={registrationSW?.swManufacturer}
            width={35}
            inputWidth={20}
            getUrl={getManufacturersNamesAPI}
            responseConverter={getManufacturerNamesResponseServer2Client}
            onChangeValue={selectManufacturer}
          />
          <Input value={getValue('swName')} label="SW 제품명" width="35rem" onChange={change('swName')} />
        </Style.InputWrapper>
        {error && <Style.Error>값을 모두 채워주세요</Style.Error>}
        <Style.ButtonWrapper>
          {registrationSW && (
            <Button theme="warning" onClick={onDelete}>
              삭제하기
            </Button>
          )}
          <Button onClick={handleSubmit(onSubmit)}>
            {!registrationSW || isFromLectureSWListTab ? '등록하기' : '수정하기'}
          </Button>
        </Style.ButtonWrapper>
      </Style.Container>
    </Template>
  );
}

export default AddOrUpdateRegistrationSWModal;
