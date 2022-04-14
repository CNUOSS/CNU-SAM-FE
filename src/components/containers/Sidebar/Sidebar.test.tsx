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

const renderApp = () =>
  render(
    <>
      <RecoilObserver node={tabState} onChange={onChange} />
      <Sidebar isLogin />
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
      renderApp();
      screen.getByText('SAM Program');
      screen.getByText('License List');
      screen.getByText('Software List');
      screen.getByText('Project List');
      screen.getByText('Group List');
    });

    it('korean(login state)', () => {
      renderApp();
      screen.getByText('소프트웨어 자산관리프로그램');
      screen.getByText('라이센스 목록');
      screen.getByText('소프트웨어 목록');
      screen.getByText('프로젝트 목록');
      screen.getByText('그룹 목록');
    });
  });

  describe('add tab test', () => {
    it('click license list', () => {
      renderApp();
      const licenseList = screen.getByText('라이센스 목록');
      fireEvent.click(licenseList);
      expect(onChange).toBeCalledTimes(2);
      expect(onChange).toBeCalledWith({ currentIdx: 0, tabs: [{ name: 'li', component: <></> }] });
    });

    it('click software list', () => {
      renderApp();
      const swList = screen.getByText('소프트웨어 목록');
      fireEvent.click(swList);
      expect(onChange).toBeCalledTimes(2);
      expect(onChange).toBeCalledWith({ currentIdx: 0, tabs: [{ name: 'sw', component: <></> }] });
    });

    it('click project list', () => {
      renderApp();
      const projectList = screen.getByText('프로젝트 목록');
      fireEvent.click(projectList);
      expect(onChange).toBeCalledTimes(2);
      expect(onChange).toBeCalledWith({ currentIdx: 0, tabs: [{ name: 'pj', component: <></> }] });
    });

    it('click group list', () => {
      renderApp();
      const groupList = screen.getByText('그룹 목록');
      fireEvent.click(groupList);
      expect(onChange).toBeCalledTimes(2);
      expect(onChange).toBeCalledWith({ currentIdx: 0, tabs: [{ name: 'gp', component: <></> }] });

      const projectList = screen.getByText('프로젝트 목록');
      fireEvent.click(projectList);
    });
  });
});
