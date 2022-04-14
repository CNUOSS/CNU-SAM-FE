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

export const FormTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const FormTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.secondary};
`;

export const SubmitButton = styled.button`
  width: 15rem;
  height: 4.2rem;
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 1rem;
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
  margin-top: 1rem;
  height: 50rem;
`;
