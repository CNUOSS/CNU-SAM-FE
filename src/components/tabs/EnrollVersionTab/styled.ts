import styled from '@emotion/styled';

interface BackgroundBoxProps {
  direction: 'column' | 'row';
}

export const BackGroundBox = styled.div<BackgroundBoxProps>`
  padding: 3rem 0;
  margin-bottom: 2rem;
  width: 100%;
  display: flex;
  flex-direction: ${(props) => props.direction};
  justify-content: space-around;
  align-items: center;

  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.quaternary};
`;

export const InputWrapper = styled.div`
  width: 70rem;
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.span`
  margin-right: 1rem;
  font-size: 1.8rem;
`;

export const DescriptionWrapper = styled.div`
  width: 70rem;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
`;

export const DescriptionInput = styled.textarea`
  padding: 1rem;
  width: 61rem;
  height: 10rem;
  font-size: 1.5rem;
  outline: none;
  resize: none;
  border: 1px solid black;
  border-radius: 1rem;
  background-color: white;
`;

export const TableWrapper = styled.div`
  margin-top: 3rem;
  height: 50rem;
`;
