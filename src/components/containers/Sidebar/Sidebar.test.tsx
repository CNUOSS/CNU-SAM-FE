import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import Sidebar from '.';
import { init } from '../../../libs/i18n';
import { render, screen, act, fireEvent } from '../../../libs/rtl-utils';
import { tabState } from '../../../recoil/tab';
import { UserAuth } from '../../../@types/types';

import TotalLectureSWListTab from '../TotalLectureSWListTab';
import SubscribedSWTab from '../SubscribedSWTab';
import LectureSWManagementTab from '../LectureSWManagementTab';
import ProjectListTab from '../ProjectListTab';
import LicenseListTab from '../LicenseListTab';

const onChange = jest.fn();

const RecoilObserver = ({ node, onChange }: any) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};

const renderApp = (isLogin: boolean = true, userAuth: UserAuth) =>
  render(
    <>
      <RecoilObserver node={tabState} onChange={onChange} />
      <Sidebar isLogin={isLogin} userAuth={userAuth} />
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
      renderApp(true, 'Admin');
      screen.getByText('SAM Program');
      screen.getByText('Using SW');
      screen.getByText('Project');
      screen.getByText('CNU-SAM Management');
    });

    it('korean(login state)', () => {
      renderApp(true, 'Admin');
      screen.getByText('소프트웨어 자산관리프로그램');
      screen.getByText('학내 사용 중인 SW');
      screen.getByText('프로젝트');
      screen.getByText('CNU-SAM 관리');
    });

    it('korean(logout state)', () => {
      renderApp(false, 'Admin');
      const list = screen.queryByText('학내 사용 중인 SW');
      expect(list).toBeNull();
    });
  });

  describe('add tab test', () => {
    it('click TotalLectureSWList list', () => {
      renderApp(true, 'Admin');
      const licenseList = screen.getByText('전체 수업 용 SW목록');
      fireEvent.click(licenseList);
      expect(onChange).toBeCalledTimes(2);
      expect(onChange).toBeCalledWith({
        currentIdx: 0,
        tabs: [{ name: '전체 수업 용 SW', component: <TotalLectureSWListTab isAdmin items={[]} /> }],
      });
    });

    it('click SubscribingSWList list', () => {
      renderApp(true, 'Admin');
      const licenseList = screen.getByText('학내 구독 중인 SW목록');
      fireEvent.click(licenseList);
      expect(onChange).toBeCalledTimes(2);
      expect(onChange).toBeCalledWith({
        currentIdx: 0,
        tabs: [
          {
            name: '학내 구독 중 SW',
            component: <SubscribedSWTab items={[]} manufacturings={[]} types={[]} />,
          },
        ],
      });
    });

    it('click SWDashboard list', () => {
      renderApp(true, 'Admin');
      const licenseList = screen.getByText('SW 통계 및 대시보드');
      fireEvent.click(licenseList);
      expect(onChange).toBeCalledTimes(2);
      expect(onChange).toBeCalledWith({ currentIdx: 0, tabs: [{ name: '대시보드', component: <></> }] });
    });

    it('click PJList list', () => {
      renderApp(true, 'Admin');
      const licenseList = screen.getByText('프로젝트 목록');
      fireEvent.click(licenseList);
      expect(onChange).toBeCalledTimes(2);
      expect(onChange).toBeCalledWith({
        currentIdx: 0,
        tabs: [{ name: '프로젝트 목록', component: <ProjectListTab items={[]} /> }],
      });
    });

    it('click LicenseList list', () => {
      renderApp(true, 'Admin');
      const licenseList = screen.getByText('라이선스 목록');
      fireEvent.click(licenseList);
      expect(onChange).toBeCalledTimes(2);
      expect(onChange).toBeCalledWith({
        currentIdx: 0,
        tabs: [{ name: '라이선스 목록', component: <LicenseListTab items={[]} /> }],
      });
    });

    it('click UserManagement list', () => {
      renderApp(true, 'Admin');
      const licenseList = screen.getByText('유저 관리');
      fireEvent.click(licenseList);
      expect(onChange).toBeCalledTimes(2);
      expect(onChange).toBeCalledWith({ currentIdx: 0, tabs: [{ name: '유저 관리', component: <></> }] });
    });

    it('click SWManagement list', () => {
      renderApp(true, 'Admin');
      const licenseList = screen.getByText('수업 용 SW 관리');
      fireEvent.click(licenseList);
      expect(onChange).toBeCalledTimes(2);
      expect(onChange).toBeCalledWith({
        currentIdx: 0,
        tabs: [{ name: '수업 용 SW 관리', component: <LectureSWManagementTab items={[]} manufacturings={[]} /> }],
      });
    });

    it('click UserGuide list', () => {
      renderApp(true, 'Admin');
      const licenseList = screen.getByText('CNU-SAM 사용자 가이드');
      fireEvent.click(licenseList);
      expect(onChange).toBeCalledTimes(2);
      expect(onChange).toBeCalledWith({ currentIdx: 0, tabs: [{ name: '사용자 가이드', component: <></> }] });
    });

    it('click group list', () => {
      renderApp(true, 'Admin');
      const licenseList = screen.getByText('CNU-SAM 사용자 가이드');
      fireEvent.click(licenseList);

      // click once
      fireEvent.click(licenseList);
      expect(onChange).toBeCalledTimes(2);
    });
  });

  it('change language', () => {
    renderApp(true, 'Admin');
    const korean = screen.getByText('한국어');
    fireEvent.click(korean);

    const english = screen.getByText('English');
    fireEvent.click(english);
  });
});
