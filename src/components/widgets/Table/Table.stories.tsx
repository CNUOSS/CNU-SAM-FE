import React from 'react';
import Table, { AttributeType } from '.';

export default {
  title: 'Widget/Table',
  component: Table,
};

const attributes: AttributeType<string>[] = [
  { label: '이름', dataKey: 'name', widthPercent: 20, disableSort: true },
  { label: '설명', dataKey: 'description', widthPercent: 50, disableSort: false },
];
const items = [
  { name: 'Brian Vaughn', description: 'Doftware engineer' },
  { name: 'Arian Vaughn', description: 'Fftware engineer' },
  { name: 'Crian Vaughn', description: 'Eoftware engineer' },
];
export const basicTable = () => (
  <div style={{ height: '100%' }}>
    <Table attributes={attributes} items={items} />
  </div>
);
