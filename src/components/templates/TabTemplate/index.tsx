import React from 'react';
import Button from '@components/widgets/Button';
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
          {onCreate && <Button onClick={onCreate}>등록하기</Button>}
          {onDelete && (
            <Button theme="warning" onClick={onDelete}>
              삭제하기
            </Button>
          )}
          {onUpdate && <Button onClick={onUpdate}>수정하기</Button>}
        </Style.ButtonWrapper>
      </Style.DescriptionWrapper>
      {children}
    </Style.Container>
  );
}

export default TabTemplate;
