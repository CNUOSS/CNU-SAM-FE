import React from 'react';
import * as Style from './styled';
import Dropdown from '../../widgets/Dropdown';
import logoImage from '../../../assets/images/logo.jpg';
import { LANGUAGES } from '../../../common/constants';

interface SidebarProps {
  isLogin: boolean;
}

function Sidebar({ isLogin }: SidebarProps) {
  return (
    <Style.Container>
      <Style.Top isLogin={isLogin}>
        <Style.Logo src={logoImage} alt="logo" />
        <Style.Title>소프트웨어 자산관리프로그램</Style.Title>
        <Style.Version>v1.0.0</Style.Version>
        <Dropdown items={LANGUAGES} onClickItem={() => {}} />
      </Style.Top>
      {/* TODO: login or userInfo */}
      {isLogin && (
        <Style.MenuList>
          <Style.MenuItem>라이센스 목록</Style.MenuItem>
          <Style.MenuItem>소프트웨어 목록</Style.MenuItem>
          <Style.MenuItem>프로젝트 목록</Style.MenuItem>
          <Style.MenuItem>그룹 목록</Style.MenuItem>
        </Style.MenuList>
      )}
    </Style.Container>
  );
}

export default Sidebar;
