import React from 'react';
import WidgetTable from '@components/widgets/Table';
import useFetch from '@hooks/useFetch';
import { GetSubscribeSWResponseClientType } from '@@types/client';
import { SubscribedSWListAttr, Number } from '@@types/types';
import { getSubscribedSWAPI } from '../../../../apis/subscribedsw';
import { subscibedSWListAttr } from '@common/constants';
import {
  subscribedswSearchRequestClient2Server,
  subscribedswSearchResponseServer2Client,
} from '@converter/subscribedsw';

export type ItemType = {
  [key in SubscribedSWListAttr]: string;
};

export interface RowType extends ItemType {
  [Number]: number;
}

interface TableProps {
  onRowClick: (item: ItemType) => void;
}

function Table({ onRowClick }: TableProps) {
  const { data } = useFetch<GetSubscribeSWResponseClientType>(
    getSubscribedSWAPI,
    {},
    {},
    { request: subscribedswSearchRequestClient2Server, response: subscribedswSearchResponseServer2Client }
  );

  const parsedItems: RowType[] = data?.subscriptionSWList.map((sw, index) => ({ ...sw, number: index + 1 })) || [];

  return (
    <WidgetTable
      items={parsedItems}
      title="학내 구독 중인 SW"
      attributes={subscibedSWListAttr}
      onRowClick={onRowClick}
    />
  );
}

export default Table;
