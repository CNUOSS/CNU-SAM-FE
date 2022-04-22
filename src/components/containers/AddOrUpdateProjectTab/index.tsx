import React from 'react';
import TabTemplate from '../../templates/TabTemplate';
import Dropdown from '../../widgets/Dropdown';
import Button from '../../widgets/Button';
import Input from '../../widgets/Input';
import * as Style from './styled';

export type AddOrUpdateProjectTabType = 'create' | 'update';
interface AddOrUpdateProjectTabProps {
  tabState: AddOrUpdateProjectTabType;
  prjName?: string;
  description?: string;
}

function AddOrUpdateProjectTab({ tabState, prjName = '', description = '' }: AddOrUpdateProjectTabProps) {
  const DESCRIPTION = tabState === 'create' ? '새로운 프로젝트를 생성하세요' : '해당 프로젝트를 수정하세요';

  return (
    <TabTemplate description={DESCRIPTION}>
      <Style.BackGroundBox>
        <Style.InputWrapper>
          <Input label="프로젝트명" value={prjName} onChange={() => {}} width="21rem" />
          <Style.WriterWrapper>
            <Style.Label>소유자</Style.Label>
            <Style.WriterName>writer</Style.WriterName>
          </Style.WriterWrapper>
          <Dropdown label="카테고리" items={[]} onClickItem={() => {}} />
          <Dropdown label="라이선스" items={[]} onClickItem={() => {}} width="11.5rem" />
        </Style.InputWrapper>
        <Style.DescriptionWrapper>
          <Style.Label>설명(선택사항)</Style.Label>
          <Style.DescriptionInput value={description} onChange={() => {}} />
        </Style.DescriptionWrapper>
        <Style.ButtonWrapper>
          {tabState === 'update' && <Button theme="warning">삭제하기</Button>}
          <Button>{tabState === 'create' ? '생성하기' : '수정하기'}</Button>
        </Style.ButtonWrapper>
      </Style.BackGroundBox>
    </TabTemplate>
  );
}

export default AddOrUpdateProjectTab;
