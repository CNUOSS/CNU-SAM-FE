import React from 'react';
import { init } from '../../../../libs/i18n';
import UserInfo from '.';
import { render, screen } from '../../../../libs/rtl-utils';

const renderApp = () => {
  render(<UserInfo />);
  init();
};

describe('Container/Sidebar/UserInfo', () => {
  describe('rendering test', () => {
    it('english', () => {
      renderApp();
      screen.getByText('logout');
      screen.getByText('Enroll Software');
      screen.getByText('Enroll Project');
    });

    it('korean', () => {
      const languageGetter = jest.spyOn(window.navigator, 'language', 'get');
      languageGetter.mockReturnValue('ko');
      renderApp();

      screen.getByText('로그아웃');
      screen.getByText('소프트웨어 등록하기');
      screen.getByText('프로젝트 등록하기');
    });
  });
});
