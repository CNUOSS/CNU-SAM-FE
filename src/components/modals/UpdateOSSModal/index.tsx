import React from 'react';
import { OSSType } from '@components/tabs/EnrollVersionTab';
import Template from '@components/templates/ModalTemplate';
import useForm from '@hooks/useForm';
import * as Style from './styled';
import Button from '@components/widgets/Button';
import Input from '@components/widgets/Input';
import SearchDropdown from '@components/widgets/SearchDropdown';

interface UpdateOSSModalProps {
  oss: OSSType;
  licenses: string[];
  changeOSS: (oss: OSSType) => void;
  closeModal: () => void;
}

function UpdateOSSModal({ oss, licenses, changeOSS, closeModal }: UpdateOSSModalProps) {
  const { change, getValue, error, handleSubmit } = useForm<OSSType>(
    {
      ossName: [{ error: 'required' }],
      ossLocation: [{ error: 'required' }],
      ossUrl: [{ error: 'required' }],
      ossVersion: [{ error: 'required' }],
    },
    {
      ...oss,
    }
  );

  const changeLicense = (license: string) => change('license')(license);
  const onSubmit = (data: OSSType) => {
    changeOSS(data);
    closeModal();
  };

  return (
    <Template closeModal={closeModal}>
      <Style.Container>
        <Style.Header>OSS 수정하기</Style.Header>
        <Style.Description>OSS를 수정해주세요</Style.Description>
        <Style.InputWrapper>
          <Input
            width="23rem"
            label="소스 이름 또는 경로"
            value={getValue('ossLocation')}
            onChange={change('ossLocation')}
          />
          <Input label="OSS명" value={getValue('ossName')} onChange={change('ossName')} />
          <Input width="48.6rem" label="OSS 관련 주소" value={getValue('ossUrl')} onChange={change('ossUrl')} />
          <Input label="OSS버전" value={getValue('ossVersion')} onChange={change('ossVersion')} />
          <SearchDropdown label="라이선스" items={licenses} defaultValue={oss.license} onChangeValue={changeLicense} />
        </Style.InputWrapper>
        {error && <Style.Error>필요한 값을 모두 입력하세요</Style.Error>}
        <Style.ButtonWrapper>
          <Button onClick={handleSubmit(onSubmit)}>수정하기</Button>
        </Style.ButtonWrapper>
      </Style.Container>
    </Template>
  );
}

export default UpdateOSSModal;
