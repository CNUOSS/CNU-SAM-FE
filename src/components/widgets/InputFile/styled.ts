import styled from '@emotion/styled';

export const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 1.8rem;
`;

export const InputBox = styled.div`
  width: 25rem;
  height: 3rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  overflow: auto;

  font-size: 1.5rem;
  border: 1px solid black;
  border-radius: 0.5rem;
  background-color: white;
`;

export const Input = styled.input`
  display: none;
`;

export const LabelButton = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13rem;
  height: 3.5rem;

  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
`;
