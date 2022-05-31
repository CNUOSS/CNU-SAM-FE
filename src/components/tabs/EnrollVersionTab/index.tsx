import React, { useState } from 'react';
import { read, utils } from 'xlsx';
import TabTemplate from '@components/templates/TabTemplate';
import InputFile from '@components/widgets/InputFile';
import Input from '@components/widgets/Input';
import DefaultText from '@components/widgets/DefaultText';
import Table, { ItemType } from './Table';
import * as Style from './styled';
import { excelType2OSSType } from '@converter/excelResult';

interface EnrollVersionTabProps {
  projectName: string;
}

export interface ExcelType {
  ID: string;
  'Source Name or Path': string;
  'OSS Name': string;
  'OSS Version': string;
  License: string;
  'Download Location': string;
}

function EnrollVersionTab({ projectName }: EnrollVersionTabProps) {
  const [items, setItems] = useState<ItemType[]>([]);

  const addNewItem = (newItem: ItemType) => setItems((prev) => [newItem, ...prev]);
  const deleteItem = (selectedIndex: number) => setItems((prev) => prev.filter((_, i: number) => i !== selectedIndex));

  const getDependency = (data: string | ArrayBuffer | null) => {
    const workBook = read(data, { type: 'binary' });
    const result = utils
      .sheet_to_json(workBook.Sheets[workBook.SheetNames[0]])
      .map((item) => excelType2OSSType(item as ExcelType));
    setItems((prev) => [...prev, ...result]);
  };

  return (
    <TabTemplate description="Description" onCreate={() => {}}>
      <Style.BackGroundBox direction="column">
        <Style.InputWrapper>
          <DefaultText label="프로젝트명">{projectName}</DefaultText>
          <Input label="버전명" width="30rem" value="" onChange={() => {}} />
        </Style.InputWrapper>
        <Style.DescriptionWrapper>
          <Style.Label>설명</Style.Label>
          <Style.DescriptionInput />
        </Style.DescriptionWrapper>
      </Style.BackGroundBox>
      <Style.BackGroundBox direction="row">
        <InputFile label="DEPENDENCY" onChange={getDependency} />
      </Style.BackGroundBox>
      <Style.TableWrapper>
        <Table items={items} licenses={[]} onAddNewItem={addNewItem} onDeleteItem={deleteItem} />
      </Style.TableWrapper>
    </TabTemplate>
  );
}

export default EnrollVersionTab;
