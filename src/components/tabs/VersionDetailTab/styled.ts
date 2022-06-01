import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const TableTitle = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondary};
`;

export const TableWrapper = styled.div`
  margin-bottom: 5rem;
`;
