import React, { useEffect, useState } from 'react';
import WidgetTable from '@components/widgets/Table';
import useFetch from '@hooks/useFetch';
import {
  GetSubscribeSWResponseClientType,
  GetSubscribeSWRequestParamsClientType,
  SubscribedSWType,
} from '@@types/client';
import { SubscribedSWListAttr, Number } from '@@types/types';
import { getSubscribedSWAPI } from '../../../../apis/subscribedsw';
import { LIMIT, subscibedSWListAttr } from '@common/constants';
import {
  subscribedswSearchRequestClient2Server,
  subscribedswSearchResponseServer2Client,
} from '@converter/subscribedsw';
import { SortDirectionType } from 'react-virtualized';

export type SearchInfoType = Omit<GetSubscribeSWRequestParamsClientType, 'size' | 'page' | 'sort'>;

export type ItemType = {
  [key in SubscribedSWListAttr]: string;
};

export interface RowType extends ItemType {
  id: number;
  [Number]: number;
}

interface TableProps {
  searchInfo: SearchInfoType;
  onRowClick: (item: SubscribedSWType) => void;
}

function Table({ searchInfo, onRowClick }: TableProps) {
  const [apiInfo, setApiInfo] = useState<GetSubscribeSWRequestParamsClientType>({
    ...searchInfo,
    size: LIMIT,
    page: 1,
    sort: '',
  });
  const { data } = useFetch<GetSubscribeSWResponseClientType>(
    getSubscribedSWAPI,
    apiInfo,
    {},
    { request: subscribedswSearchRequestClient2Server, response: subscribedswSearchResponseServer2Client }
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

  const parsedItems: RowType[] = data?.subscriptionSWList.map((sw, index) => ({ ...sw, number: index + 1 })) || [];

  return (
    <WidgetTable
      title="학내 구독 중인 SW"
      items={parsedItems}
      attributes={subscibedSWListAttr}
      pageCount={data?.meta.totalPages}
      onSort={onSort}
      onRowClick={onRowClick}
      onClickPageButton={onClickPageButton}
    />
  );
}

export default Table;
