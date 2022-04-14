import React from 'react';
import { init } from '../../../../libs/i18n';
import UserInfo from '.';
import { render, screen, act, fireEvent } from '../../../../libs/rtl-utils';

const addNewTabMock = jest.fn();

const renderApp = () => {
  render(<UserInfo addNewTab={addNewTabMock} />);
};

describe('Container/Sidebar/UserInfo', () => {
  describe('rendering test', () => {
    it('english', () => {
      const languageGetter = jest.spyOn(window.navigator, 'language', 'get');
      languageGetter.mockReturnValue('en');
      act(() => {
        init();
      });
      renderApp();
      screen.getByText('logout');
      screen.getByText('Enroll Software');
      screen.getByText('Enroll Project');
    });

    it('korean', () => {
      renderApp();

      screen.getByText('로그아웃');
      screen.getByText('소프트웨어 등록하기');
      screen.getByText('프로젝트 등록하기');
    });
  });

  it('click button', () => {
    renderApp();

    const enrollSWButton = screen.getByText('소프트웨어 등록하기');
    fireEvent.click(enrollSWButton);
    expect(addNewTabMock).toBeCalledTimes(1);
  });
});
