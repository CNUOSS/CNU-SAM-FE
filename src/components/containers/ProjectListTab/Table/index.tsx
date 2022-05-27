// Dependencies
import React, { useEffect, useState } from 'react';
import { SortDirectionType } from 'react-virtualized';

// API
import { getProjectListAPI } from '@apis/project';
import { projectSearchRequestClient2Server, projectSearchResponseServer2Client } from '@converter/project';

import useFetch from '@hooks/useFetch';
import WidgetTable from '@components/widgets/Table';
import { LIMIT, projectListAttr } from '@common/constants';
import { ProjectListAttr, Number } from '@@types/types';
import { ProjectSearchResponseClientType, ProjectSearchRequestParamsClientType, ProjectType } from '@@types/client';

export type SearchInfoType = Omit<ProjectSearchRequestParamsClientType, 'size' | 'page' | 'sort'>;
export type ItemType = { [key in ProjectListAttr]: string };
export interface RowType extends ItemType {
  id: number;
  [Number]: number;
}

interface TableProps {
  searchInfo: SearchInfoType;
  onRowClick: (item: ProjectType) => void;
}

function Table({ searchInfo, onRowClick }: TableProps) {
  const [apiInfo, setApiInfo] = useState<ProjectSearchRequestParamsClientType>({
    size: LIMIT,
    page: 1,
    sort: '',
    ...searchInfo,
  });
  const { data } = useFetch<ProjectSearchResponseClientType>(
    getProjectListAPI,
    apiInfo,
    {},
    { request: projectSearchRequestClient2Server, response: projectSearchResponseServer2Client }
  );

  useEffect(() => {
    setApiInfo((prev) => ({ ...prev, ...searchInfo }));
  }, [searchInfo]);

  const onClickPageButton = (pageNumber: number) => {
    setApiInfo((prev) => ({ ...prev, offset: pageNumber }));
  };
  const onSort = (sortBy: string, sortDirection: SortDirectionType) => {
    setApiInfo((prev) => ({ ...prev, sort: `${sortBy},${sortDirection.toLowerCase()}` }));
  };

  const parsedItems: RowType[] =
    data?.project.map((item, index) => ({ ...item, number: apiInfo.size * (apiInfo.page - 1) + (index + 1) })) || [];

  return (
    <WidgetTable
      title="프로젝트 목록"
      items={parsedItems}
      attributes={projectListAttr}
      pageCount={data?.pageInfo.totalPages}
      onSort={onSort}
      onClickPageButton={onClickPageButton}
      onRowClick={onRowClick}
    />
  );
}

export default Table;
