import styled from '@emotion/styled';

export const FormTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1rem;
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondary};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
  margin-top: 1rem;
  padding: 2rem 3rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.quaternary};
`;

export const InputList = styled.div`
  width: 86%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
`;

export const TableTitle = styled.h2`
  margin-top: 3rem;

  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondary};
`;

export const TableWrapper = styled.div`
  margin-top: 3rem;
  height: 50rem;
`;
