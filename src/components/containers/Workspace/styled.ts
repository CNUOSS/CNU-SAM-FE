import styled from '@emotion/styled';

interface TabItemProps {
  selected: boolean;
}

interface WorkspaceProps {
  selected: boolean;
}

export const Container = styled.div`
  width: calc(100% - 30rem);
`;

export const TabList = styled.ul`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: flex-end;
  padding: 0 2rem;
`;

export const TabItem = styled.li<TabItemProps>`
  height: ${(props) => (props.selected ? 3.3 : 3.2)}rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  padding: 0 1.5rem;

  font-size: 1.5rem;
  border: 1px solid black;
  border-bottom: none;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: ${(props) => (props.selected ? 'white' : '#c0c0c0')};
  transform: translateY(${(props) => (props.selected ? 0.1 : 0)}rem);
  cursor: pointer;
`;

export const Workspace = styled.main<WorkspaceProps>`
  position: relative;
  border-top: 1px solid black;
  width: 100%;
  height: calc(100% - 6rem);
  display: ${(props) => (props.selected ? 'block' : 'none')};
`;

export const ImageWrapper = styled.div`
  position: relative;
  height: 80vh;
`;

export const Image = styled.img`
  width: 20vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
