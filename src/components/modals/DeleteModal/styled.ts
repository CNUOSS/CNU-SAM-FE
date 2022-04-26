import styled from '@emotion/styled';

export const Container = styled.div`
  width: 50rem;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.tertiary};
  overflow: hidden;
  -webkit-box-shadow: 0px 0px 9px 0px #000000;
  box-shadow: 0px 0px 9px 0px #000000;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 6.5rem;
  padding-left: 2rem;
  font-size: 2rem;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.quaternary};
`;

export const Description = styled.p`
  padding: 2rem;
  font-size: 2rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 2rem;
`;
