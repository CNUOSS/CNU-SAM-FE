import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '@components/widgets/Input';
import { useAuth } from '@libs/auth';
import useForm from '@hooks/useForm';
import { SigninRequestBodyClientType } from '@apis/user';
import * as Style from './styled';

function SigninForm() {
  const { login } = useAuth();
  const { t } = useTranslation();
  const [error, setError] = useState('');
  const { change, handleSubmit, getValue } = useForm<SigninRequestBodyClientType>();

  const onSubmit = async (data: Partial<SigninRequestBodyClientType>) => {
    try {
      await login(data);
    } catch (_) {
      setError('로그인에 실패했습니다');
    }
  };

  const handleSigninSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(onSubmit)();
  };

  return (
    <Style.Container>
      <Style.SiginWrapper onSubmit={handleSigninSubmit}>
        <Style.InputWrapper>
          <Input value={getValue('id')} width="17rem" onChange={change('id')} />
          <Input value={getValue('password')} width="17rem" onChange={change('password')} type="password" />
        </Style.InputWrapper>
        <Style.SigninButton>{t('page:signin')}</Style.SigninButton>
      </Style.SiginWrapper>
      {error && <Style.Error>{error}</Style.Error>}
      <Style.SignupButton>{t('page:signup')}</Style.SignupButton>
    </Style.Container>
  );
}

export default SigninForm;
