import styled from '@emotion/styled';

export const TableWrapper = styled.div`
  margin-top: 1rem;
  height: 50rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 4rem;
`;

export const TableTitle = styled.h2`
  margin-top: 3rem;

  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondary};
`;
