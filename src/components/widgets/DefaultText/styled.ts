import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  font-size: 1.8rem;
`;

export const Label = styled.span``;

export const TextBox = styled.div`
  min-width: 10rem;
  height: 3rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.tertiary};
`;
