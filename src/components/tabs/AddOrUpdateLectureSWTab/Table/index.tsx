import React, { useMemo } from 'react';
import TableWidget from '@components/widgets/Table';
import Input from '@components/widgets/Input';
import Icon from '@components/widgets/Icon';
import { AddLectureSWListAttr, Trash, Number } from '@@types/types';
import { addLectureSWListAttr } from '@common/constants';
import SelfDropdownContainer from '@components/containers/SelfDropdownContainer';
import { getManufacturersNamesAPI, getSWNamesAPI } from '@apis/data';
import { getManufacturerNamesResponseServer2Client, getSWNamesResponseServer2Client } from '@converter/data';
import useForm from '@hooks/useForm';

export type ItemType = {
  [key in AddLectureSWListAttr]: string | React.ReactElement;
};

export interface RowType extends ItemType {
  [Number]: number | React.ReactElement;
  [Trash]: React.ReactElement;
}

interface FormType {
  swName: string;
  license: string;
  swManufacturer: string;
}

interface TableProps {
  items: ItemType[];
  onAddNewItem: (item: ItemType) => void;
  onDeleteItem: (index: number) => void;
}

function Table({ items, onAddNewItem, onDeleteItem }: TableProps) {
  const { change, getValue, getAllValue } = useForm<FormType>();

  const changeManufacturer = (swManufacturer: string) => change('swManufacturer')(swManufacturer);
  const changeSWName = (swName: string) => change('swName')(swName);
  const deleteItem = (selectedIndex: number) => onDeleteItem(selectedIndex);
  const addNewItem = () => {
    changeSWName('');
    changeManufacturer('');
    change('license')('');
    onAddNewItem(getAllValue() as ItemType);
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
    swManufacturer: (
      <SelfDropdownContainer
        getUrl={getManufacturersNamesAPI}
        width={20}
        inputWidth={8}
        responseConverter={getManufacturerNamesResponseServer2Client}
        onChangeValue={changeManufacturer}
      />
    ),
    swName: (
      <SelfDropdownContainer
        getUrl={getSWNamesAPI}
        width={25}
        inputWidth={15}
        responseConverter={getSWNamesResponseServer2Client}
        onChangeValue={changeSWName}
      />
    ),
    license: <Input value={getValue('license')} width="25rem" onChange={change('license')} />,
    trash: <></>,
  };

  return <TableWidget title="등록된 수업용 SW" items={[addRow, ...parsedItems]} attributes={addLectureSWListAttr} />;
}

export default Table;
