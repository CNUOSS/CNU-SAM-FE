import React from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useSetRecoilState } from 'recoil';
import * as Style from './styled';

import UserInfo from './UserInfo';
import SigninForm from './SigninForm';
import Dropdown from '../../widgets/Dropdown';
import Accordion from '../../widgets/Accordion';
import logoImage from '../../../assets/images/logo.jpg';
import { CategoryType, LANGUAGES, mgCategory, pjCategory, swCategory } from '../../../common/constants';
import { tabState } from '../../../recoil/tab';
import { UserAuth, NavItem } from '../../../@types/types';
import { theme } from '../../../style/theme';
import Icon from '../../../components/widgets/Icon';

interface SidebarProps {
  isLogin: boolean;
  userAuth?: UserAuth;
}

function Sidebar({ isLogin, userAuth }: SidebarProps) {
  const { t } = useTranslation();
  const setTabState = useSetRecoilState(tabState);
  const languageNames = LANGUAGES.map((l) => l.name);

  const menuPerUser: { [user in UserAuth]: CategoryType[] } = {
    Admin: [swCategory(), pjCategory(), mgCategory()],
    Manager: [swCategory(), pjCategory()],
    User: [swCategory(true), pjCategory()],
  };

  const changeLanguage = (selectedIdx: number) => {
    i18n.changeLanguage(LANGUAGES[selectedIdx].lang);
  };

  const getComponents = (navItem: NavItem) => {
    // TODO: apply translation
    switch (navItem) {
      case 'TotalLectureSWList':
        return { name: '전체 수업 용 SW', component: <></> };
      case 'SubscribingSWList':
        return { name: '학내 구독 중 SW', component: <></> };
      case 'SWDashboard':
        return { name: '대시보드', component: <></> };
      case 'PJList':
        return { name: '프로젝트 목록', component: <></> };
      case 'LicenseList':
        return { name: '라이선스 목록', component: <></> };
      case 'UserManagement':
        return { name: '유저 관리', component: <></> };
      case 'SWManagement':
        return { name: '수업 용 SW 관리', component: <></> };
      case 'UserGuide':
        return { name: '사용자 가이드', component: <></> };
      default:
        return { name: 'error', component: <></> };
    }
  };

  const addNewTab = (navItem: NavItem) => {
    const { name, component } = getComponents(navItem);
    setTabState((oldState) => {
      const index = oldState.tabs.findIndex((tab) => tab.name === name);
      if (index === oldState.currentIdx) return oldState;
      return {
        currentIdx: index < 0 ? oldState.tabs.length : index,
        tabs: index < 0 ? [...oldState.tabs, { name, component }] : oldState.tabs,
      };
    });
  };

  return (
    <Style.Container>
      <Style.Top isLogin={isLogin}>
        <Style.Logo src={logoImage} alt="logo" />
        <Style.Title>{t('page:title')}</Style.Title>
        <Style.Version>v1.0.0</Style.Version>
        <Dropdown items={languageNames} onClickItem={changeLanguage} />
      </Style.Top>
      <Style.AuthBox>{isLogin ? <UserInfo /> : <SigninForm />}</Style.AuthBox>
      {isLogin && userAuth && (
        <Style.MenuList>
          {menuPerUser[userAuth].map((category) => (
            <Accordion key={category.title} {...category} onClickItem={(item) => addNewTab(item as NavItem)} />
          ))}
          <Style.GuideMenu onClick={() => addNewTab('UserGuide')}>
            {t('page:UserGuide')}
            <Style.IconWrapper>
              <Icon icon="triangle" color={theme.colors.primary} />
            </Style.IconWrapper>
          </Style.GuideMenu>
        </Style.MenuList>
      )}
    </Style.Container>
  );
}

export default Sidebar;
