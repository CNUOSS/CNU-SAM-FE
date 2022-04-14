import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavItem } from '../../../../@types/types';
import Icon from '../../../../components/widgets/Icon';
import * as Style from './styled';

interface UserInfoProps {
  addNewTab: (navItem: NavItem) => void;
}

function UserInfo({ addNewTab }: UserInfoProps) {
  const { t } = useTranslation();

  return (
    <Style.Container>
      <Style.InfoWrapper>
        <Icon size="3rem" icon="gear" />
        <Style.Name>user-name</Style.Name>
        <Style.Logout>{t('page:logout')}</Style.Logout>
      </Style.InfoWrapper>
      <Style.ButtonWrapper>
        <Style.EnrollButton onClick={() => addNewTab('EnrollSW')}>{t('page:enrollSW')}</Style.EnrollButton>
        <Style.EnrollButton>{t('page:enrollPJ')}</Style.EnrollButton>
      </Style.ButtonWrapper>
    </Style.Container>
  );
}

export default UserInfo;
