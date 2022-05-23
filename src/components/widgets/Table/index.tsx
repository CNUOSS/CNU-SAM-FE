import React, { CSSProperties, useEffect, useState } from 'react';
import {
  AutoSizer,
  Table as VirtualizedTable,
  Column,
  SortDirection,
  SortDirectionType,
  TableHeaderProps,
  TableCellProps,
} from 'react-virtualized';
import Icon, { IconType } from '../Icon';
import * as Style from './styled';
import Pagination from '../Pagination';
import { theme } from '@style/theme';
import 'react-virtualized/styles.css';

export interface AttributeType<DataKey, Label> {
  label: Label;
  dataKey: DataKey;
  widthPercent: number;
  disableSort: boolean;
}

interface ObjType {
  [key: string]: any;
}

interface TableProps<T, C, Label> {
  title?: string;
  attributes: AttributeType<C, Label>[];
  items: T[];
  pageCount?: number;
  onRowClick?: (item: T) => void;
  onClickPageButton?: (pageNumber: number) => void;
}

// TODO: infinite scrolling
function Table<T extends ObjType, C extends string, Label extends string>({
  title,
  attributes,
  pageCount,
  items,
  onRowClick,
  onClickPageButton,
}: TableProps<T, C, Label>) {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataList, setDataList] = useState<T[]>(items);
  const [sortBy, setSortBy] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<SortDirectionType>(SortDirection.ASC);

  useEffect(() => {
    setDataList(items);
  }, [items]);

  const sortList = (sortBy: string, sortDirection: SortDirectionType) => {
    dataList.sort((a, b) => {
      if (a[sortBy].toLowerCase() < b[sortBy].toLowerCase()) return -1;
      if (a[sortBy].toLowerCase() > b[sortBy].toLowerCase()) return 1;
      return 0;
    });

    return sortDirection === SortDirection.ASC ? dataList : dataList.reverse();
  };

  const sort = (sortBy: string, sortDirection: SortDirectionType) => {
    const sortedList: T[] = sortList(sortBy, sortDirection);

    setSortBy(sortBy);
    setSortDirection(sortDirection);
    setDataList(sortedList);
  };

  const getRowStyle = ({ index }: { index: number }): CSSProperties => {
    if (index < 0) return {};
    // can add other case
    return {
      textAlign: 'center',
      backgroundColor: 'white',
      borderBottom: `3px solid ${theme.colors.tertiary}`,
      cursor: onRowClick ? 'pointer' : 'auto',
    };
  };

  const getIcon = (dataKey: string, sortBy?: string, sortDirection?: SortDirectionType): IconType => {
    if (sortBy !== dataKey) return 'sort';
    if (sortDirection === SortDirection.ASC) return 'asc';
    return 'desc';
  };

  const headerRenderer = (info: TableHeaderProps, dataKey: string) => (
    <Style.HeaderItem data-testid="table-attr" sortable={!info.disableSort}>
      {info.label}
      {!info.disableSort && <Icon size="1.5rem" icon={getIcon(dataKey, info.sortBy, info.sortDirection)} />}
    </Style.HeaderItem>
  );

  const cellRenderer = (info: TableCellProps, dataKey: string) => (
    <Style.CellItem data-testid={`table-cell-${dataKey}`}>{info.cellData}</Style.CellItem>
  );

  const handleClickPageButton = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    if (onClickPageButton) onClickPageButton(pageNumber);
  };

  return (
    <>
      <Style.Container>
        {title && <Style.TableTitle>{title}</Style.TableTitle>}
        <AutoSizer defaultWidth={800} defaultHeight={800}>
          {({ height, width }) => (
            <VirtualizedTable
              width={width}
              height={height || 800}
              headerHeight={50}
              rowHeight={50}
              rowCount={dataList.length}
              rowStyle={getRowStyle}
              rowGetter={({ index }) => dataList[index]}
              onRowClick={({ rowData }) => onRowClick && onRowClick(rowData)}
              sort={({ sortBy, sortDirection }) => sort(sortBy, sortDirection)}
              sortBy={sortBy}
              sortDirection={sortDirection}
            >
              {attributes.map(({ widthPercent, ...attr }) => (
                <Column
                  {...attr}
                  key={attr.label}
                  headerRenderer={(info) => headerRenderer(info, attr.dataKey)}
                  cellRenderer={(info) => cellRenderer(info, attr.dataKey)}
                  width={(width * widthPercent) / 100}
                />
              ))}
            </VirtualizedTable>
          )}
        </AutoSizer>
      </Style.Container>
      {pageCount && (
        <Style.PaginationWrapper>
          <Pagination totalCount={pageCount} currentPage={currentPage} onClickPageButton={handleClickPageButton} />
        </Style.PaginationWrapper>
      )}
    </>
  );
}

export default Table;
