import React, { useState, useMemo } from 'react';
import TableWidget from '../../../widgets/Table';
import { AddLectureSWListAttr, Trash, Number } from '../../../../@types/types';
import { addLectureSWListAttr } from '../../../../common/constants';
import SelfDropdown from '../../../widgets/SelfDropdown';
import Input from '../../../widgets/Input';
import Icon from '../../../widgets/Icon';

export type ItemType = {
  [key in AddLectureSWListAttr]: string | React.ReactElement;
};

export interface RowType extends ItemType {
  [Number]: number | React.ReactElement;
  [Trash]: React.ReactElement;
}

interface TableProps {
  items: ItemType[];
  manufacturings: string[];
  swNames: string[];
  onAddNewItem: (item: ItemType) => void;
  onDeleteItem: (index: number) => void;
}

function Table({ items, manufacturings, swNames, onAddNewItem, onDeleteItem }: TableProps) {
  const [manufacturing, setCompany] = useState('');
  const [swName, setSWName] = useState('');
  const [license, setLicense] = useState('');

  const changeLicenseName = (event: React.ChangeEvent<HTMLInputElement>) => setLicense(event.target.value);
  const changeCompany = (manufacturing: string) => setCompany(manufacturing);
  const changeSWName = (swName: string) => setSWName(swName);
  const deleteItem = (selectedIndex: number) => onDeleteItem(selectedIndex);
  const addNewItem = () => {
    setCompany('');
    setSWName('');
    setLicense('');
    onAddNewItem({ swName, manufacturing, license });
  };

  const parsedItems: RowType[] = useMemo(
    () =>
      items.map((item, index) => ({
        ...item,
        number: index + 1,
        trash: <Icon onClick={() => deleteItem(index)} size="2rem" icon="trashcan" />,
      })),
    [items]
  );

  const addRow: RowType = {
    number: <Icon onClick={addNewItem} size="2rem" icon="plus" />,
    manufacturing: (
      <SelfDropdown
        items={manufacturings}
        width={18}
        inputValue={manufacturing}
        inputWidth={8}
        onChange={changeCompany}
      />
    ),
    swName: <SelfDropdown items={swNames} width={25} inputValue={swName} inputWidth={15} onChange={changeSWName} />,
    license: <Input value={license} width="25rem" onChange={changeLicenseName} />,
    trash: <></>,
  };

  return <TableWidget title="등록된 수업용 SW" items={[addRow, ...parsedItems]} attributes={addLectureSWListAttr} />;
}

export default Table;
