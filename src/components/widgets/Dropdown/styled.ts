import styled from '@emotion/styled';

interface IconWrapperProps {
  isOpen: boolean;
}

interface ItemProps {
  selected: boolean;
}

interface ContainerProps {
  width: string;
}

export const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width};
  position: relative;
`;

export const CurrentItem = styled.div`
  height: 3rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border: 1px solid black;
  border-radius: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  width: 0.8rem;
  transition: all 0.3s linear;
  transform: rotate(${(props) => (props.isOpen ? 180 : 0)}deg);
  transform-origin: 50% 55%;
`;

export const List = styled.ul`
  width: 100%;
  position: absolute;
  top: 3.5rem;
  padding: 1rem;

  border: 1px solid black;
  border-radius: 0.5rem;
  background-color: white;
`;

export const Item = styled.li<ItemProps>`
  width: 100%;
  padding-bottom: 1rem;
  color: ${(props) => props.selected && props.theme.colors.primary};
  font-size: 1.5rem;
  font-weight: ${(props) => props.selected && 'bold'};
  cursor: pointer;

  &:last-child {
    padding-bottom: 0;
  }
`;
