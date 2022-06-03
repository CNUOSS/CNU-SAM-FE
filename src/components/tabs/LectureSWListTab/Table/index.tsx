import React, { useEffect, useState } from 'react';
import WidgetTable from '@components/widgets/Table';
import useFetch from '@hooks/useFetch';
import { LectureSWListAttr } from '@@types/types';
import { lectureSWListAttr, LIMIT } from '@common/constants';
import { GetLectureSWListRequestParamsClientType, GetLectureSWListResponseClientType } from '@@types/client';
import { getLectureSWListAPI } from '@apis/lecturesw';
import { getLectureSWListRequestClient2Server, getLectureSWListResponseServer2Client } from '@converter/lecturesw';
import { useAuth } from '@libs/auth';
import * as Style from '../styled';

export type SearchInfoType = Pick<
  GetLectureSWListRequestParamsClientType,
  'department' | 'year' | 'semester' | 'lectureType' | 'lectureName' | 'lectureNum' | 'owner'
>;

export type ItemType = {
  [key in LectureSWListAttr]: string | boolean | React.ReactElement;
};

interface TableProps {
  searchInfo: SearchInfoType;
  clickItem: (item: ItemType) => void;
  clickItemAddButton: (item: ItemType) => () => void;
}

function Table({ searchInfo, clickItemAddButton, clickItem }: TableProps) {
  const { user } = useAuth();
  const [apiInfo, setApiInfo] = useState<SearchInfoType | { size: number; page: number }>({
    size: LIMIT,
    page: 1,
    ...searchInfo,
  });
  const { data } = useFetch<GetLectureSWListResponseClientType>(
    getLectureSWListAPI,
    apiInfo,
    {},
    { request: getLectureSWListRequestClient2Server, response: getLectureSWListResponseServer2Client }
  );

  useEffect(() => {
    setApiInfo((prev) => ({ ...prev, ...searchInfo }));
  }, [searchInfo]);

  const getNewManaged = (isManaged: boolean | string, onClick: () => void) => {
    if (isManaged) return 'Yes';
    if (user?.role !== 'ADMIN') return 'No';
    const clickItem = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onClick();
    };
    return (
      <Style.AddButton data-testid="add-btn" onClick={clickItem}>
        추가
      </Style.AddButton>
    );
  };

  const parsedItem =
    data?.lectureSWList.map(({ isManaged, ...others }) => {
      const newManaged = getNewManaged(isManaged, clickItemAddButton({ isManaged, ...others }));
      return { ...others, isManaged: newManaged };
    }) || [];

  return (
    <WidgetTable
      title="등록된 수업용 SW"
      items={parsedItem}
      attributes={lectureSWListAttr}
      onRowClick={clickItem}
      pageCount={data?.pageInfo.totalPages || 0}
    />
  );
}

export default Table;
