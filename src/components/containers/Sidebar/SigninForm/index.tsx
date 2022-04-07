import React from 'react';
import { useTranslation } from 'react-i18next';
import * as Style from './styled';

function SigninForm() {
  const { t } = useTranslation();

  return (
    <Style.Container>
      <Style.SiginWrapper>
        <Style.InputWrapper>
          <Style.Input />
          <Style.Input />
        </Style.InputWrapper>
        <Style.SigninButton>{t('page:signin')}</Style.SigninButton>
      </Style.SiginWrapper>
      <Style.SignupButton>{t('page:signup')}</Style.SignupButton>
    </Style.Container>
  );
}

export default SigninForm;
