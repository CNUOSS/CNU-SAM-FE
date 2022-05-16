import React from 'react';
import { init } from '@libs/i18n';
import { render, screen, act, fireEvent, waitFor } from '@libs/rtl-utils';
import UserInfo from '.';

const addNewTabMock = jest.fn();

const renderApp = () => {
  render(<UserInfo addNewTab={addNewTabMock} />, { needAuth: true });
};

describe('Container/Sidebar/UserInfo', () => {
  describe('rendering test', () => {
    it('english', async () => {
      const languageGetter = jest.spyOn(window.navigator, 'language', 'get');
      languageGetter.mockReturnValue('en');
      act(() => {
        init();
      });
      renderApp();
      await waitFor(() => {
        screen.getByText('logout');
        screen.getByText('Enroll Software');
        screen.getByText('Enroll Project');
      });
    });

    it('korean', async () => {
      renderApp();

      await waitFor(() => {
        screen.getByText('로그아웃');
        screen.getByText('소프트웨어 등록하기');
        screen.getByText('프로젝트 등록하기');
      });
    });
  });

  it('click button', async () => {
    renderApp();

    await waitFor(() => {
      const enrollSWButton = screen.getByText('소프트웨어 등록하기');
      fireEvent.click(enrollSWButton);
      expect(addNewTabMock).toBeCalledTimes(1);
    });
  });
});
