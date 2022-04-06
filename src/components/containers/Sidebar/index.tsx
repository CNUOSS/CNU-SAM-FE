import React from 'react';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { useSetRecoilState } from 'recoil';
import * as Style from './styled';

import UserInfo from './UserInfo';
import SigninForm from './SigninForm';
import Dropdown from '../../widgets/Dropdown';
import logoImage from '../../../assets/images/logo.jpg';
import { LANGUAGES } from '../../../common/constants';
import { tabState } from '../../../recoil/tab';

interface SidebarProps {
  isLogin: boolean;
}

function Sidebar({ isLogin }: SidebarProps) {
  const { t } = useTranslation();
  const setTabState = useSetRecoilState(tabState);
  const languageNames = LANGUAGES.map((l) => l.name);

  const changeLanguage = (selectedIdx: number) => {
    i18n.changeLanguage(LANGUAGES[selectedIdx].lang);
  };

  const addNewTab = (name: string, component: React.ReactElement) =>
    setTabState((oldState) => ({
      currentIdx: oldState.tabs.length,
      tabs: [...oldState.tabs, { name, component }],
    }));

  return (
    <Style.Container>
      <Style.Top isLogin={isLogin}>
        <Style.Logo src={logoImage} alt="logo" />
        <Style.Title>{t('page:title')}</Style.Title>
        <Style.Version>v1.0.0</Style.Version>
        <Dropdown items={languageNames} onClickItem={changeLanguage} />
      </Style.Top>
      <Style.AuthBox>{isLogin ? <UserInfo /> : <SigninForm />}</Style.AuthBox>
      {isLogin && (
        <Style.MenuList>
          <Style.MenuItem onClick={() => addNewTab('li', <></>)}>{t('page:licenseList')}</Style.MenuItem>
          <Style.MenuItem onClick={() => addNewTab('sw', <></>)}>{t('page:softwareList')}</Style.MenuItem>
          <Style.MenuItem onClick={() => addNewTab('pj', <></>)}>{t('page:projectList')}</Style.MenuItem>
          <Style.MenuItem onClick={() => addNewTab('gp', <></>)}>{t('page:groupList')}</Style.MenuItem>
        </Style.MenuList>
      )}
    </Style.Container>
  );
}

export default Sidebar;
