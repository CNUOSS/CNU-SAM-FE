import React from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useSetRecoilState } from 'recoil';
import { useAuth } from '@libs/auth';

import LectureSWListTab from '@components/tabs/LectureSWListTab';
import AddOrUpdateLectureSWTab from '@components/tabs/AddOrUpdateLectureSWTab';
import SubscribedSWTab from '@components/tabs/SubscribedSWTab';
import RegistrationSWTab from '@components/tabs/RegistrationSWTab';
import ProjectListTab from '@components/tabs/ProjectListTab';
import AddOrUpdateProjectTab from '@components/tabs/AddOrUpdateProjectTab';
import LicenseListTab from '@components/tabs/LicenseListTab';
import DashboardTab from '@components/tabs/DashboardTab';
import Dropdown from '@components/widgets/Dropdown';
import Accordion from '@components/widgets/Accordion';
import UserInfo from './UserInfo';
import SigninForm from './SigninForm';

import logoImage from '@assets/images/logo.jpg';
import { CategoryType, LANGUAGES, mgCategory, pjCategory, swCategory } from '@common/constants';
import { compareTabs } from '@utils/manage-tabs';
import { tabState } from '@recoil/tab';
import { NavItem } from '@@types/types';
import { NOTLOGIN, RoleType } from '@@types/client';
import * as Style from './styled';

function Sidebar() {
  const { t } = useTranslation();
  const { user } = useAuth();
  const setTabState = useSetRecoilState(tabState);
  const languageNames = LANGUAGES.map((l) => l.name);

  const menuPerUser: { [user in RoleType | NOTLOGIN]: CategoryType[] } = {
    [RoleType.ADMIN]: [swCategory(), pjCategory(), mgCategory()],
    [RoleType.MANAGER]: [swCategory(), pjCategory()],
    [RoleType.USER]: [swCategory(true), pjCategory()],
    [NOTLOGIN]: [swCategory(true), pjCategory()],
  };

  const changeLanguage = (selectedIdx: number) => {
    i18n.changeLanguage(LANGUAGES[selectedIdx].lang);
  };

  const getComponents = (navItem: NavItem) => {
    // TODO: apply translation
    // FIXME: these Components maybe will removed all props
    switch (navItem) {
      case 'TotalLectureSWList':
        return { name: '전체 수업 용 SW', component: <LectureSWListTab /> };
      case 'SubscribingSWList':
        return { name: '학내 구독 중 SW', component: <SubscribedSWTab /> };
      case 'SWDashboard':
        return { name: '대시보드', component: <DashboardTab /> };
      case 'PJList':
        return { name: '프로젝트 목록', component: <ProjectListTab /> };
      case 'LicenseList':
        return { name: '라이선스 목록', component: <LicenseListTab /> };
      case 'UserManagement':
        return { name: '유저 관리', component: <></> };
      case 'SWManagement':
        return { name: '수업 용 SW 관리', component: <RegistrationSWTab /> };
      case 'UserGuide':
        return { name: '사용자 가이드', component: <></> };
      case 'EnrollSW':
        return { name: '수업용 SW 등록', component: <AddOrUpdateLectureSWTab /> };
      case 'EnrollPRJ':
        return { name: '프로젝트 등록', component: <AddOrUpdateProjectTab /> };
      default:
        return { name: 'error', component: <></> };
    }
  };

  const addNewTab = (navItem: NavItem) => {
    const { name, component } = getComponents(navItem);
    setTabState((oldState) => compareTabs(oldState, name, component));
  };

  return (
    <Style.Container>
      <Style.Top isLogin={!!user?.id}>
        <Style.Logo src={logoImage} alt="logo" />
        <Style.Title>{t('page:title')}</Style.Title>
        <Style.Version>v1.0.0</Style.Version>
        <Dropdown items={languageNames} onClickItem={changeLanguage} />
      </Style.Top>
      <Style.AuthBox>{user?.id ? <UserInfo addNewTab={addNewTab} /> : <SigninForm />}</Style.AuthBox>
      <Style.MenuList>
        {menuPerUser[user?.role || NOTLOGIN].map((category) => (
          <Accordion key={category.title} {...category} onClickItem={(item) => addNewTab(item as NavItem)} />
        ))}
        <Style.GuideMenu onClick={() => addNewTab('UserGuide')}>{t('page:UserGuide')}</Style.GuideMenu>
      </Style.MenuList>
    </Style.Container>
  );
}

export default Sidebar;
