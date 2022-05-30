import React, { useEffect, useState } from 'react';
import { SortDirectionType } from 'react-virtualized';
import WidgetTable from '@components/widgets/Table';
import useFetch from '@hooks/useFetch';
import {
  GetRegistrationSWListResponseClientType,
  GetRegistrationSWListRequstParamsClientType,
  RegistrationSWType,
} from '@@types/client';
import { LIMIT, registrationSWListAttr } from '@common/constants';
import { RegistrationSWListAttr, Number } from '@@types/types';
import { getRegistrationSWListAPI } from '@apis/registrationsw';
import {
  getRegistrationSWRequestClient2Server,
  getRegistrationSWResponseServer2Client,
} from '@converter/registrationsw';

export type SearchInfoType = Omit<GetRegistrationSWListRequstParamsClientType, 'size' | 'page' | 'sort'>;

export type ItemType = {
  [key in RegistrationSWListAttr]: string;
};

export interface RowType extends ItemType {
  id: number;
  managed: boolean;
  [Number]: number;
}

interface TableProps {
  searchInfo: SearchInfoType;
  onRowClick: (item: RegistrationSWType) => void;
}

function Table({ searchInfo, onRowClick }: TableProps) {
  const [apiInfo, setApiInfo] = useState<GetRegistrationSWListRequstParamsClientType>({
    page: 1,
    sort: '',
    size: LIMIT,
    ...searchInfo,
  });
  const { data } = useFetch<GetRegistrationSWListResponseClientType>(
    getRegistrationSWListAPI,
    apiInfo,
    {},
    { request: getRegistrationSWRequestClient2Server, response: getRegistrationSWResponseServer2Client }
  );

  useEffect(() => {
    setApiInfo((prev) => ({ ...prev, ...searchInfo }));
  }, [searchInfo]);

  const onClickPageButton = (pageNumber: number) => {
    setApiInfo((prev) => ({ ...prev, page: pageNumber }));
  };
  const onSort = (sortBy: string, sortDirection: SortDirectionType) => {
    setApiInfo((prev) => ({ ...prev, sort: `${sortBy},${sortDirection.toLowerCase()}` }));
  };

  const parsedItems: RowType[] = data?.registrationSWList.map((item, index) => ({ ...item, number: index + 1 })) || [];
  return (
    <WidgetTable
      title="수업용 SW관리"
      items={parsedItems}
      attributes={registrationSWListAttr}
      pageCount={data?.pageInfo.totalPages}
      onSort={onSort}
      onRowClick={onRowClick}
      onClickPageButton={onClickPageButton}
    />
  );
}

export default Table;
