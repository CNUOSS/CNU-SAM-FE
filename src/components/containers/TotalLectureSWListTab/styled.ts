import styled from '@emotion/styled';

export const TableWrapper = styled.div`
  margin-top: 3rem;
  height: 50rem;
`;

export const AddButton = styled.button`
  width: 5rem;
  height: 3.2rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 1rem;
`;
