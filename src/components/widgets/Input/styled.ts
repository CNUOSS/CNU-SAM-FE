import styled from '@emotion/styled';

interface InputProps {
  width?: string;
}

export const InputWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 1.8rem;
`;

export const Input = styled.input<InputProps>`
  width: ${(props) => props.width || '14rem'};
  height: 3rem;
  padding-left: 1rem;

  border: 1px solid black;
  border-radius: 0.5rem;
  outline: none;
`;
