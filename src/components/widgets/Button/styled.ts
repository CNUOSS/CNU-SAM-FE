import styled from '@emotion/styled';
import { ButtonType } from '.';
import { backgroundSelector } from './style-selector';

interface ButtonProps {
  btnTheme: ButtonType;
}

export const Button = styled.button<ButtonProps>`
  min-width: 15rem;
  height: 4.2rem;

  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  border-radius: 1rem;
  ${(props) => backgroundSelector[props.btnTheme]};
`;
