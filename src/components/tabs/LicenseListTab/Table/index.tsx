import React, { useEffect, useState } from 'react';
import Icon from '@components/widgets/Icon';
import WidgetTable from '@components/widgets/Table';
import useFetch from '@hooks/useFetch';
import { LicenseListAttr, Number, Trash } from '@@types/types';
import { licenseListAttr, LIMIT } from '@common/constants';
import { licenseSearchRequestClient2Server, licenseSearchResponseServer2Client } from '@converter/license';
import { getLicenseListAPI } from '@apis/license';
import { GetLicenseListRequestParamsClientType, GetLicenseListResponseClientType } from '@@types/client';

export type SearchInfoType = Omit<GetLicenseListRequestParamsClientType, 'limit' | 'offset'>;
export type ItemType = { [key in LicenseListAttr]: string };

export interface RowType extends ItemType {
  [Number]: number;
  [Trash]: React.ReactElement;
}

interface TableProps {
  searchInfo: SearchInfoType;
  openDeleteModal: (id: number) => void;
}

function Table({ searchInfo, openDeleteModal }: TableProps) {
  const [apiInfo, setApiInfo] = useState<GetLicenseListRequestParamsClientType>({
    limit: LIMIT,
    offset: 1,
    ...searchInfo,
  });
  const { data } = useFetch<GetLicenseListResponseClientType>(
    getLicenseListAPI,
    apiInfo,
    {},
    { request: licenseSearchRequestClient2Server, response: licenseSearchResponseServer2Client }
  );

  useEffect(() => {
    setApiInfo((prev) => ({ ...prev, ...searchInfo }));
  }, [searchInfo]);

  const onClickPageButton = (pageNumber: number) => {
    setApiInfo((prev) => ({ ...prev, offset: pageNumber }));
  };

  const parsedItem: RowType[] =
    data?.licenses.map((item, index) => ({
      ...item,
      restriction: item.restrictions.join(' '),
      number: apiInfo.limit * (apiInfo.offset - 1) + (index + 1),
      trash: <Icon onClick={() => openDeleteModal(item.id)} icon="trashcan" size="2rem" />,
    })) || [];

  return (
    <WidgetTable
      items={parsedItem}
      attributes={licenseListAttr}
      pageCount={Math.ceil((data?.pageInfo.totalPages || 0) / LIMIT)}
      onClickPageButton={onClickPageButton}
    />
  );
}

export default Table;
