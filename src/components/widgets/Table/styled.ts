import styled from '@emotion/styled';

interface HeaderItemProps {
  sortable: boolean;
}

interface PaginationWrapperProps {
  titleExist: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.5rem;

  .ReactVirtualized__Table__headerRow {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.colors.quaternary};
  }

  .ReactVirtualized__Grid__innerScrollContainer,
  .ReactVirtualized__Table__rowColumn,
  .ReactVirtualized__Table__row {
    width: 100% !important;
    overflow: visible !important;

    &:first-of-type {
      z-index: 1;
    }
  }

  div[aria-label='grid'] {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const TableTitle = styled.h2`
  margin-bottom: 1rem;

  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondary};
`;

export const HeaderItem = styled.div<HeaderItemProps>`
  display: flex;
  gap: 1rem;
  justify-content: center;
  cursor: ${(props) => (props.sortable ? 'pointer' : 'auto')};
  &:hover {
    color: ${(props) => props.sortable && props.theme.colors.secondary};

    path {
      fill: ${(props) => props.sortable && props.theme.colors.secondary};
    }
  }
`;

export const CellItem = styled.div`
  display: flex;
  justify-content: center;
`;

export const PaginationWrapper = styled.div<PaginationWrapperProps>`
  margin-top: ${(props) => (props.titleExist ? '5rem' : '2rem')};
`;
