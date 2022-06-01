import generateGuid from '@utils/generate-id';
import React from 'react';
import * as Style from './styled';

export interface AttributeType<DataKey, Label> {
  label: Label;
  dataKey: DataKey;
}

interface LineTableProps<DataKey, Label> {
  columns: AttributeType<DataKey, Label>[];
  data: any[];
}

// useTable에다가 작성한 columns와 data를 전달한 후 아래 4개의 props를 받아온다
function LineTable<DataKey, Label>({ columns, data }: LineTableProps<DataKey, Label>) {
  return (
    <Style.Table>
      <thead>
        <tr>
          {columns.map((column) => (
            <Style.Th key={generateGuid()}>{column.label}</Style.Th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((datum) => (
          <Style.Tr key={generateGuid()}>
            {columns.map((column) => (
              <Style.Td key={generateGuid()}>{datum[column.dataKey]}</Style.Td>
            ))}
          </Style.Tr>
        ))}
      </tbody>
    </Style.Table>
  );
}

export default LineTable;
