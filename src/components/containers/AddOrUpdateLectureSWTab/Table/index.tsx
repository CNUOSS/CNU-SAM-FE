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
  companys: string[];
  products: string[];
  onAddNewItem: (item: ItemType) => void;
  onDeleteItem: (index: number) => void;
}

function Table({ items, companys, products, onAddNewItem, onDeleteItem }: TableProps) {
  const [company, setCompany] = useState('');
  const [productName, setProductName] = useState('');
  const [license, setLicense] = useState('');

  const changeLicenseName = (event: React.ChangeEvent<HTMLInputElement>) => setLicense(event.target.value);
  const changeCompany = (company: string) => setCompany(company);
  const changeProduct = (product: string) => setProductName(product);
  const deleteItem = (selectedIndex: number) => onDeleteItem(selectedIndex);
  const addNewItem = () => {
    setCompany('');
    setProductName('');
    setLicense('');
    onAddNewItem({ productName, company, license });
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
    company: <SelfDropdown items={companys} width={18} inputValue={company} inputWidth={8} onChange={changeCompany} />,
    productName: (
      <SelfDropdown items={products} width={25} inputValue={productName} inputWidth={15} onChange={changeProduct} />
    ),
    license: <Input value={license} width="25rem" onChange={changeLicenseName} />,
    trash: <></>,
  };

  return <TableWidget title="등록된 수업용 SW" items={[addRow, ...parsedItems]} attributes={addLectureSWListAttr} />;
}

export default Table;
