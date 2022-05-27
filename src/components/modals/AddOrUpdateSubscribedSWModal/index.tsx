// Dependencies
import React from 'react';
import { useQueryClient } from 'react-query';
import { useAuth } from '@libs/auth';

// Hooks
import useMutation from '@hooks/useMutation';
import useForm from '@hooks/useForm';

// Components
import Button from '@components/widgets/Button';
import Input from '@components/widgets/Input';
import Template from '@components/templates/ModalTemplate';

import { getSubscribedSWAPI, createSubscribedSWAPI } from '@apis/subscribedsw';
import { createSubscribedRequestClient2Server } from '@converter/subscribedsw';
import { SubscribedSWType, CreateSubscribedRequestBodyClientType } from '@@types/client';
import * as Style from './styled';

interface AddOrUpdateSubscribedSWModalProps {
  subscribedSW?: SubscribedSWType;
  modalState: 'create' | 'update';
  onDelete?: () => void;
  closeModal: () => void;
}

type InputType = Omit<CreateSubscribedRequestBodyClientType, 'updatorId'>;

function AddOrUpdateSubscribedSWModal({
  subscribedSW,
  modalState,
  closeModal,
  onDelete,
}: AddOrUpdateSubscribedSWModalProps) {
  const headerText = `학내 구독중인 SW ${modalState === 'create' ? `등록` : `수정`}하기`;
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const createMutationSuccess = async () => {
    await queryClient.invalidateQueries(getSubscribedSWAPI);
    closeModal();
  };
  const { mutate } = useMutation<SubscribedSWType>({
    url: createSubscribedSWAPI.url,
    method: createSubscribedSWAPI.method,
    onSuccess: createMutationSuccess,
    converter: {
      request: createSubscribedRequestClient2Server,
    },
  });
  const { change, getValue, handleSubmit, error } = useForm<InputType>({
    swType: [{ error: 'required' }],
    swManufacturer: [{ error: 'required' }],
    swName: [{ error: 'required' }],
    usageRange: [{ error: 'required' }],
    license: [{ error: 'required' }],
    expireDate: [{ error: 'required' }],
    firstSubscribeDate: [{ error: 'required' }],
  });

  const onSubmit = (data: InputType) => {
    if (!user) return;
    mutate({ updatorId: user.id, ...data });
  };

  return (
    <Template closeModal={closeModal}>
      <Style.Container>
        <Style.Header>{headerText}</Style.Header>
        <Style.Description>화이팅</Style.Description>
        <Style.InputWrapper>
          <Input label="제품군" width="23rem" value={getValue('swType')} onChange={change('swType')} />
          <Input label="이용범위" width="23rem" value={getValue('usageRange')} onChange={change('usageRange')} />
          <Input label="제조사" width="23rem" value={getValue('swManufacturer')} onChange={change('swManufacturer')} />
          <Input label="라이선스" width="23rem" value={getValue('license')} onChange={change('license')} />
          <Input label="제품명" width="23rem" value={getValue('swName')} onChange={change('swName')} />
          <Input
            type="date"
            label="만료일"
            width="23rem"
            value={getValue('expireDate')}
            onChange={change('expireDate')}
          />
          <Style.BlankSpace />
          <Input
            type="date"
            label="최초구독일"
            width="23rem"
            value={getValue('firstSubscribeDate')}
            onChange={change('firstSubscribeDate')}
          />
        </Style.InputWrapper>
        {error && <Style.Error>모든 항목을(를) 채워주세요</Style.Error>}
        <Style.ButtonWrapper>
          {modalState === 'update' && onDelete && (
            <Button theme="warning" onClick={onDelete}>
              삭제하기
            </Button>
          )}
          <Button onClick={handleSubmit(onSubmit)}>{modalState === 'update' ? '수정하기' : '등록하기'}</Button>
        </Style.ButtonWrapper>
      </Style.Container>
    </Template>
  );
}

export default AddOrUpdateSubscribedSWModal;
