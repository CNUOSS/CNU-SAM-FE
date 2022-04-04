import styled from '@emotion/styled';

interface TopProps {
  isLogin: boolean;
}

export const Container = styled.aside`
  width: 30rem;
  height: 100%;
  padding-top: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid ${(props) => props.theme.colors.primary};
  user-select: none;
`;

export const Top = styled.div<TopProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3.5rem 1.2rem 3.5rem;
  border-bottom: ${(props) => props.isLogin && `2px solid ${props.theme.colors.primary}`};
`;

export const Dropdown = styled.div`
  width: 10rem;
  height: 3rem;
  margin-top: 1.5rem;
  background-color: #555;
  cursor: pointer;
`;

export const Logo = styled.img`
  width: 100%;
`;

export const Title = styled.h1`
  margin: 0;
  margin-top: 1.5rem;
  font-size: 1.5rem;
`;

export const Version = styled.span`
  font-size: 1.2rem;
`;

export const MenuList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding-left: 2.5rem;
  height: 6rem;
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 2px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;
