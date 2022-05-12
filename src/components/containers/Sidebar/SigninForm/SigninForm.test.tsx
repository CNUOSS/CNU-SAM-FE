import React from 'react';
import { init } from '@libs/i18n';
import { render, screen, act, waitFor } from '@libs/rtl-utils';
import SigninForm from '.';

const renderApp = () => {
  render(<SigninForm />, { needAuth: true });
};

describe('Container/Sidebar/SigninForm', () => {
  describe('rendering test', () => {
    it('english', async () => {
      const languageGetter = jest.spyOn(window.navigator, 'language', 'get');
      languageGetter.mockReturnValue('en');
      act(() => {
        init();
      });
      renderApp();
      await waitFor(() => {
        screen.getByText('Login');
        screen.getByText('Sign Up');
      });
    });

    it('korean', async () => {
      renderApp();

      await waitFor(() => {
        screen.getByText('로그인');
        screen.getByText('회원가입');
      });
    });
  });
});
