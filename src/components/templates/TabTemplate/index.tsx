import React from 'react';
import * as Style from './styled';

interface TabTemplateProps {
  children: React.ReactElement | React.ReactElement[];
  description: string;
  onCreate?: () => void;
  onDelete?: () => void;
  onUpdate?: () => void;
}

function TabTemplate({ children, description, onCreate, onDelete, onUpdate }: TabTemplateProps) {
  return (
    <Style.Container>
      <Style.DescriptionWrapper>
        <Style.Description>{description}</Style.Description>
        <Style.ButtonWrapper>
          {onCreate && <Style.EnrollButton onClick={onCreate}>등록하기</Style.EnrollButton>}
          {onDelete && <Style.WarningButton onClick={onDelete}>삭제하기</Style.WarningButton>}
          {onUpdate && <Style.EnrollButton onClick={onUpdate}>수정하기</Style.EnrollButton>}
        </Style.ButtonWrapper>
      </Style.DescriptionWrapper>
      {children}
    </Style.Container>
  );
}

export default TabTemplate;
