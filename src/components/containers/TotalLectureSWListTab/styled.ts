import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 126rem;
  min-width: 101rem;
  padding: 4.5rem 2rem 2rem 2rem;
`;

export const Description = styled.p`
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: bold;
`;

export const TableTitle = styled.h2`
  margin-top: 3rem;

  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondary};
`;

export const TableWrapper = styled.div`
  margin-top: 1rem;
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
