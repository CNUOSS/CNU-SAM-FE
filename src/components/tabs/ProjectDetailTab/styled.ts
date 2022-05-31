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
  width: 100rem;
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.span`
  margin-right: 1rem;
  font-size: 1.8rem;
`;

export const DescriptionWrapper = styled.div`
  width: 100rem;
  margin: 2rem 0;
  display: flex;
  justify-content: space-between;
`;

export const DescriptionInput = styled.div`
  padding: 1rem;
  width: 85rem;
  height: 10rem;
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.colors.tertiary};
`;

export const TableWrapper = styled.div`
  position: relative;
  margin-top: 3rem;
  height: 50rem;
`;

export const EnrollButtonWrapper = styled.div`
  position: absolute;
  top: -1.5rem;
  right: 0;
  z-index: 1;
`;
