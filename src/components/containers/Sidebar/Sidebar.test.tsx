import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import Sidebar from '.';
import { init } from '../../../libs/i18n';
import { render, screen, act, fireEvent } from '../../../libs/rtl-utils';
import { tabState } from '../../../recoil/tab';

const onChange = jest.fn();

const RecoilObserver = ({ node, onChange }: any) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};

const renderApp = (isLogin: boolean) =>
  render(
    <>
      <RecoilObserver node={tabState} onChange={onChange} />
      <Sidebar isLogin={isLogin} />
    </>
  );

beforeEach(() => {
  onChange.mockClear();
});

describe('Container/Sidebar', () => {
  describe('rendering test', () => {
    it('english(login state)', () => {
      const languageGetter = jest.spyOn(window.navigator, 'language', 'get');
      languageGetter.mockReturnValue('en');
      act(() => {
        init();
      });
      renderApp(true);
      screen.getByText('SAM Program');
      screen.getByText('License List');
      screen.getByText('Software List');
      screen.getByText('Project List');
      screen.getByText('Group List');
    });

    it('korean(login state)', () => {
      renderApp(true);
      screen.getByText('소프트웨어 자산관리프로그램');
      screen.getByText('라이센스 목록');
      screen.getByText('소프트웨어 목록');
      screen.getByText('프로젝트 목록');
      screen.getByText('그룹 목록');
    });

    it('korean(logout state)', () => {
      renderApp(false);
      const list = screen.queryByText('라이센스 목록');
      expect(list).toBeNull();
    });
  });

  describe('add tab test', () => {
    it('click license list', () => {
      renderApp(true);
      const licenseList = screen.getByText('라이센스 목록');
      fireEvent.click(licenseList);
      expect(onChange).toBeCalledTimes(2);
      expect(onChange).toBeCalledWith({ currentIdx: 0, tabs: [{ name: 'li', component: <></> }] });
    });

    it('click software list', () => {
      renderApp(true);
      const swList = screen.getByText('소프트웨어 목록');
      fireEvent.click(swList);
      expect(onChange).toBeCalledTimes(2);
      expect(onChange).toBeCalledWith({ currentIdx: 0, tabs: [{ name: 'sw', component: <></> }] });
    });

    it('click project list', () => {
      renderApp(true);
      const projectList = screen.getByText('프로젝트 목록');
      fireEvent.click(projectList);
      expect(onChange).toBeCalledTimes(2);
      expect(onChange).toBeCalledWith({ currentIdx: 0, tabs: [{ name: 'pj', component: <></> }] });
    });

    it('click group list', () => {
      renderApp(true);
      const groupList = screen.getByText('그룹 목록');
      fireEvent.click(groupList);
      expect(onChange).toBeCalledTimes(2);
      expect(onChange).toBeCalledWith({ currentIdx: 0, tabs: [{ name: 'gp', component: <></> }] });

      // click once
      fireEvent.click(groupList);
    });
  });

  it('', () => {
    renderApp(true);
    const korean = screen.getByText('한국어');
    fireEvent.click(korean);

    const english = screen.getByText('English');
    fireEvent.click(english);
  });
});
