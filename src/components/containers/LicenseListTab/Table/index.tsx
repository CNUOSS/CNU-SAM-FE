import React from 'react';
import Icon from '../../../widgets/Icon';
import WidgetTable from '../../../widgets/Table';
import useFetch from '../../../../hooks/useFetch';
import { LicenseListAttr, Number, Trash } from '../../../../@types/types';
import { licenseListAttr } from '../../../../common/constants';
import { getLicenseListAPI } from '../../../../apis/license';
import { licenseSearch2ServerRequest } from '../../../../converter/license';

export interface RowType extends ItemType {
  [Number]: number;
  [Trash]: React.ReactElement;
}

export type ItemType = {
  [key in LicenseListAttr]: string;
};

interface TableProps {
  searchInfo: any;
  openDeleteModal: () => void;
}

function Table({ searchInfo, openDeleteModal }: TableProps) {
  // TODO: add limit and offset
  const { data: licenses } = useFetch<ItemType[]>(getLicenseListAPI, searchInfo, {}, licenseSearch2ServerRequest);

  const parsedItem: RowType[] =
    licenses?.map((item, index) => ({
      ...item,
      number: index + 1,
      trash: <Icon onClick={openDeleteModal} icon="trashcan" size="2rem" />,
    })) || [];

  return <WidgetTable items={parsedItem} attributes={licenseListAttr} />;
}

export default Table;
