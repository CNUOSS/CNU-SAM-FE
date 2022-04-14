import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100%;
`;

export const InfoWrapper = styled.div`
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Name = styled.span`
  font-weight: bold;
`;

export const Logout = styled.span`
  padding-left: 1rem;
  border-left: 1px solid black;
  cursor: pointer;
`;

export const ButtonWrapper = styled.div`
  margin-top: 2.5rem;
`;

export const EnrollButton = styled.div`
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0;

  color: white;
  border: none;
  border-radius: 1rem;
  font-size: 1.8rem;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
`;
