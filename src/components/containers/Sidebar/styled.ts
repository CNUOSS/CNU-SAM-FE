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

export const Logo = styled.img`
  width: 100%;
`;

export const Title = styled.h1`
  margin: 0;
  margin-top: 1.5rem;
  font-size: 1.5rem;
`;

export const Version = styled.span`
  margin-bottom: 1.5rem;
  font-size: 1.2rem;
`;

export const AuthBox = styled.div`
  margin: 2rem 0;
  width: calc(100% - 5rem);
`;

export const MenuList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const GuideMenu = styled.li`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5rem;

  font-size: 2rem;
  font-weight: bold;
  border: 1px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;

export const IconWrapper = styled.div`
  transform: rotate(90deg);
`;
