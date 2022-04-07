import React from 'react';
import { init } from '../../../../libs/i18n';
import SigninForm from '.';
import { render, screen, act } from '../../../../libs/rtl-utils';

const renderApp = () => {
  render(<SigninForm />);
};

describe('Container/Sidebar/SigninForm', () => {
  describe('rendering test', () => {
    it('english', () => {
      const languageGetter = jest.spyOn(window.navigator, 'language', 'get');
      languageGetter.mockReturnValue('en');
      act(() => {
        init();
      });
      renderApp();
      screen.getByText('Login');
      screen.getByText('Sign Up');
    });

    it('korean', () => {
      renderApp();

      screen.getByText('로그인');
      screen.getByText('회원가입');
    });
  });
});
