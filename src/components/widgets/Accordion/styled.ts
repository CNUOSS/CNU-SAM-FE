import styled from '@emotion/styled';

interface IsOpenProps {
  isOpen: boolean;
}

interface DisableProps {
  disable: boolean;
}

interface ListProps extends IsOpenProps {
  numOfItems: number;
}

export const Container = styled.div`
  width: 100%;
`;

export const Category = styled.div<DisableProps>`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;

  font-size: 2rem;
  font-weight: bold;
  border: 1px solid ${(props) => props.theme.colors.primary};
  color: ${(props) => (props.disable ? 'white' : props.theme.colors.primary)};
  background-color: ${(props) => (props.disable ? props.theme.colors.gray : props.theme.colors.quaternary)};
  cursor: pointer;
`;

export const IconWrapper = styled.div<IsOpenProps>`
  width: 1.5rem;
  height: 1.5rem;
  transform: rotate(${(props) => (props.isOpen ? 180 : 90)}deg);
  transition: all 0.3s linear;
  transform-origin: 50% 55%;
`;

export const List = styled.ul<ListProps>`
  max-height: ${(props) => (props.isOpen ? `${props.numOfItems * 3}rem` : '0px')};
  transition: max-height 0.3s linear;
  overflow: hidden;
`;

export const Item = styled.li<DisableProps>`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  padding-left: 2.5rem;
  font-size: 1.5rem;
  color: ${(props) => (props.disable ? props.theme.colors.gray : 'black')};
  background-color: ${(props) => (props.disable ? props.theme.colors.lightGray : props.theme.colors.tertiary)};
  cursor: ${(props) => (props.disable ? 'not-allowed' : 'pointer')};
`;
