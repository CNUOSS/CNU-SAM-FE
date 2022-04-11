import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  font-size: 1.8rem;

  .ReactVirtualized__Table__headerRow {
    background-color: ${(props) => props.theme.colors.quaternary};
  }

  div[aria-label='grid'] {
    background-color: ${(props) => props.theme.colors.tertiary};
  }
`;

export const HeaderItem = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  &:hover {
    color: ${(props) => props.theme.colors.secondary};
    path {
      fill: ${(props) => props.theme.colors.secondary};
    }
  }
`;

export const IconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;
