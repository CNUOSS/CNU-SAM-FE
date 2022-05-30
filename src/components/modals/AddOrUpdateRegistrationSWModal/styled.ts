import styled from '@emotion/styled';

export const Container = styled.div`
  width: 70rem;
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

export const InputWrapper = styled.div`
  width: 100%;
  margin: 3rem 0 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const CompanyWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  float: right;
  gap: 1rem;
  margin: 0 3rem 2rem 0;
`;

export const Error = styled.span`
  display: block;
  margin-top: 1rem;
  text-align: center;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.warning};
`;
