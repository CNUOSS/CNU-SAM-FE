import React from 'react';
import useFetch from '@hooks/useFetch';
import CheckBox from '@components/widgets/Checkbox';
import { getRestrictionsAPI } from '@apis/data';
import { getRestrictionResponseServer2Client } from '@converter/data';
import * as Style from '../styled';

interface RestrictionsProps {
  selectItem: (restriction: string) => void;
}

function Restrictions({ selectItem }: RestrictionsProps) {
  const { data: restrictions } = useFetch<string[]>(
    getRestrictionsAPI,
    {},
    {},
    { response: getRestrictionResponseServer2Client }
  );

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
