import styled from '@emotion/styled';

export const BackGroundBox = styled.div`
  padding: 3rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.quaternary};
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100rem;
`;

export const WriterWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Label = styled.span`
  margin-right: 1rem;
  font-size: 1.8rem;
`;

export const WriterName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12.5rem;
  height: 3rem;
  font-size: 2rem;
  background-color: ${(props) => props.theme.colors.tertiary};
`;

export const DescriptionWrapper = styled.div`
  width: 100rem;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
`;

export const DescriptionInput = styled.textarea`
  padding: 1rem;
  width: 85rem;
  height: 10rem;
  border-radius: 1rem;
  border: 1px solid black;
  outline: none;
`;

export const ButtonWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 2rem;
`;
