import React from 'react';
import WidgetTable from '../../../widgets/Table';
import useFetch from '../../../../hooks/useFetch';
import { LicenseListAttr, Number, Trash } from '../../../../@types/types';
import { licenseListAttr } from '../../../../common/constants';
import { getLicenseListAPI } from '../../../../apis/license';
import Icon from '../../../../components/widgets/Icon';

export interface RowType extends ItemType {
  [Number]: number;
  [Trash]: React.ReactElement;
}

export type ItemType = {
  [key in LicenseListAttr]: string;
};

interface TableProps {
  openDeleteModal: () => void;
}

function Table({ openDeleteModal }: TableProps) {
  // TODO: Add params
  const { data: licenses } = useFetch<ItemType[]>(getLicenseListAPI);

  const parsedItem: RowType[] =
    licenses?.map((item, index) => ({
      ...item,
      number: index + 1,
      trash: <Icon onClick={openDeleteModal} icon="trashcan" size="2rem" />,
    })) || [];

  return <WidgetTable items={parsedItem} attributes={licenseListAttr} />;
}

export default Table;
