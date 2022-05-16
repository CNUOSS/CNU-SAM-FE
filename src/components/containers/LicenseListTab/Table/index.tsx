import React, { useEffect, useState } from 'react';
import Icon from '@components/widgets/Icon';
import WidgetTable from '@components/widgets/Table';
import useFetch from '@hooks/useFetch';
import { LicenseListAttr, Number, Trash } from '@@types/types';
import { licenseListAttr, LIMIT } from '@common/constants';
import { licenseSearchRequestClient2Server } from '@converter/license';
import {
  getLicenseListAPI,
  GetLicenseListRequestParamsClientType,
  GetLicenseListResponseClientType,
} from '@apis/license';

export type SearchInfoType = Omit<GetLicenseListRequestParamsClientType, 'limit' | 'offset'>;
export type ItemType = { [key in LicenseListAttr]: string };

export interface RowType extends ItemType {
  [Number]: number;
  [Trash]: React.ReactElement;
}

interface TableProps {
  searchInfo: SearchInfoType;
  openDeleteModal: () => void;
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
    licenseSearchRequestClient2Server
  );
  const parsedItem: RowType[] =
    data?.licenses.map((item, index) => ({
      ...item,
      restriction: item.restrictions.join(' '),
      number: index + 1,
      trash: <Icon onClick={openDeleteModal} icon="trashcan" size="2rem" />,
    })) || [];

  useEffect(() => {
    setApiInfo((prev) => ({ ...prev, ...searchInfo }));
  }, [searchInfo]);

  const onClickPageButton = (pageNumber: number) => {
    setApiInfo((prev) => ({ ...prev, offset: pageNumber }));
  };

  return (
    <WidgetTable
      items={parsedItem}
      attributes={licenseListAttr}
      pageCount={Math.ceil(data?.meta.totalCount || 0 / LIMIT)}
      onClickPageButton={onClickPageButton}
    />
  );
}

export default Table;
