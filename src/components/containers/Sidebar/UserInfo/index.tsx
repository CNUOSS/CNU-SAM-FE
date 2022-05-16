import React from 'react';
import { useTranslation } from 'react-i18next';
import Icon from '@components/widgets/Icon';
import { useAuth } from '@libs/auth';
import { NavItem } from '@@types/types';
import * as Style from './styled';

interface UserInfoProps {
  addNewTab: (navItem: NavItem) => void;
}

function UserInfo({ addNewTab }: UserInfoProps) {
  const { logout } = useAuth();
  const { t } = useTranslation();

  const handleLogout = () => logout();

  return (
    <Style.Container>
      <Style.InfoWrapper>
        <Icon size="3rem" icon="gear" />
        <Style.Name>user-name</Style.Name>
        <Style.Logout onClick={handleLogout}>{t('page:logout')}</Style.Logout>
      </Style.InfoWrapper>
      <Style.ButtonWrapper>
        <Style.EnrollButton onClick={() => addNewTab('EnrollSW')}>{t('page:enrollSW')}</Style.EnrollButton>
        <Style.EnrollButton onClick={() => addNewTab('EnrollPRJ')}>{t('page:enrollPJ')}</Style.EnrollButton>
      </Style.ButtonWrapper>
    </Style.Container>
  );
}

export default UserInfo;
