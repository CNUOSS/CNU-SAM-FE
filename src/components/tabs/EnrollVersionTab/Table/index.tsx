import React, { useMemo, useState } from 'react';
import Icon from '@components/widgets/Icon';
import Input from '@components/widgets/Input';
import TableWidget from '@components/widgets/Table';
import Dropdown from '@components/widgets/Dropdown';
import { OSSListAttr, Trash, Number } from '@@types/types';
import { ossListAttr } from '@common/constants';

export type ItemType = {
  [key in OSSListAttr]: string;
};

type RowType = {
  [key in OSSListAttr | Number | Trash]: number | string | React.ReactElement;
};

interface TableProps {
  items: ItemType[];
  licenses: string[];
  onAddNewItem: (item: ItemType) => void;
  onDeleteItem: (index: number) => void;
}

function Table({ items, onAddNewItem, licenses, onDeleteItem }: TableProps) {
  const [ossLocation, setOssLocation] = useState('');
  const [ossName, setOssName] = useState('');
  const [ossVersion, setOssVersion] = useState('');
  const [license, setLicense] = useState('');
  const [ossUrl, setOssUrl] = useState('');

  const changeOssLocation = (event: React.ChangeEvent<HTMLInputElement>) => setOssLocation(event.target.value);
  const changeOssName = (event: React.ChangeEvent<HTMLInputElement>) => setOssName(event.target.value);
  const changeOssVersion = (event: React.ChangeEvent<HTMLInputElement>) => setOssVersion(event.target.value);
  const changeLicense = (licenseIdx: number) => setLicense(licenses[licenseIdx]);
  const changeOssUrl = (event: React.ChangeEvent<HTMLInputElement>) => setOssUrl(event.target.value);
  const addNewItem = () => {
    setOssLocation('');
    setOssName('');
    setOssVersion('');
    setLicense('');
    setOssUrl('');
    onAddNewItem({ ossLocation, ossName, ossVersion, license, ossUrl });
  };

  const parsedItems: RowType[] = useMemo(
    () =>
      items.map((item, index) => ({
        ...item,
        number: index + 1,
        trash: <Icon onClick={() => onDeleteItem(index)} size="2rem" icon="trashcan" />,
      })),
    [items]
  );

  const plugRow: RowType = {
    number: <Icon onClick={addNewItem} size="2rem" icon="plus" />,
    ossLocation: <Input width="25rem" value={ossLocation} onChange={changeOssLocation} />,
    ossName: <Input width="15rem" value={ossName} onChange={changeOssName} />,
    ossVersion: <Input value={ossVersion} width="7rem" onChange={changeOssVersion} />,
    license: <Dropdown width="20rem" items={[]} onClickItem={changeLicense} />,
    ossUrl: <Input width="20rem" value={ossUrl} onChange={changeOssUrl} />,
    trash: <></>,
  };

  return <TableWidget items={[plugRow, ...parsedItems]} attributes={ossListAttr} />;
}

export default Table;
