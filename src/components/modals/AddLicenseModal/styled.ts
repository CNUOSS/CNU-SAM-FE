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
  padding: 2rem 5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
`;

export const RestrictionTitle = styled.h3`
  padding-left: 5rem;
  margin-top: 1rem;
  font-size: 1.8rem;
  font-weight: normal;
`;

export const RestrictionsWrapper = styled.div`
  padding: 2rem 5rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const ButtonWrapper = styled.div`
  float: right;
  margin: 2rem;
`;
