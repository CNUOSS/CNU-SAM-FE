import React from 'react';
import useFetch from '../../../../hooks/useFetch';
import CheckBox from '../../../widgets/Checkbox';
import { getRestrictionsAPI } from '../../../../apis/data';
import * as Style from '../styled';

interface RestrictionsProps {
  selectItem: (restriction: string) => void;
}

function Restrictions({ selectItem }: RestrictionsProps) {
  const { data: restrictions } = useFetch<string[]>(getRestrictionsAPI);

  return restrictions ? (
    <Style.RestrictionsWrapper>
      {restrictions.map((res) => (
        <CheckBox key={res} label={res} onClick={() => selectItem(res)} />
      ))}
    </Style.RestrictionsWrapper>
  ) : (
    <></>
  );
}

export default Restrictions;
