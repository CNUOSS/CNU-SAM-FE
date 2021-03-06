import styled from '@emotion/styled';

export const Container = styled.div``;

export const SiginWrapper = styled.form`
  display: flex;
  justify-content: space-between;
`;

export const InputWrapper = styled.div`
  height: 7rem;
  width: calc(100% - 8rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SigninButton = styled.button`
  width: 7rem;
  height: 7rem;
  color: white;
  border-radius: 0.5rem;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const SignupButton = styled.button`
  width: 100%;
  height: 4.5rem;
  margin-top: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  background-color: white;
  border: 2px solid ${(props) => props.theme.colors.secondary};
  border-radius: 0.5rem;
`;

export const Error = styled.span`
  display: block;
  margin-top: 1rem;
  text-align: center;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.warning};
`;
