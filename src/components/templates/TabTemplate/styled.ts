import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 126rem;
  min-width: 101rem;
  padding: 4.5rem 2rem 2rem 2rem;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.p`
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: bold;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

export const EnrollButton = styled.button`
  width: 15rem;
  height: 4.2rem;

  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.secondary};
`;

export const WarningButton = styled.button`
  width: 15rem;
  height: 4.2rem;

  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.warning};
`;
