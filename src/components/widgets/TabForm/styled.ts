import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
  padding: 2rem 3rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.quaternary};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  width: 100%;
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
