import React from 'react';
import * as Style from './styled';

function SigninForm() {
  return (
    <Style.Container>
      <Style.SiginWrapper>
        <Style.InputWrapper>
          <Style.Input />
          <Style.Input />
        </Style.InputWrapper>
        <Style.SigninButton>로그인</Style.SigninButton>
      </Style.SiginWrapper>
      <Style.SignupButton>회원가입</Style.SignupButton>
    </Style.Container>
  );
}

export default SigninForm;
