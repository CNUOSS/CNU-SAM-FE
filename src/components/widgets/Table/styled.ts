import styled from '@emotion/styled';

interface HeaderItemProps {
  sortable: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.8rem;

  .ReactVirtualized__Table__headerRow {
    display: flex;
    align-items: center;
    background-color: ${(props) => props.theme.colors.quaternary};
  }

  div[aria-label='grid'] {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
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

export const IconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;
