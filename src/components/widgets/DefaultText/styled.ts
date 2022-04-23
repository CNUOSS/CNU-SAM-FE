import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const Label = styled.span`
  font-size: 1.8rem;
`;

export const TextBox = styled.div`
  min-width: 10rem;
  height: 3rem;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.8rem;
  background-color: ${(props) => props.theme.colors.tertiary};
`;
