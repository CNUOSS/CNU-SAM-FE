import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const spinning = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.colors.gray};
  opacity: 0.3;
`;

export const Loader = styled.div`
  border: 16px solid ${(props) => props.theme.colors.quaternary};
  border-radius: 50%;
  border-top: 16px solid ${(props) => props.theme.colors.primary};
  width: 120px;
  height: 120px;
  animation: ${spinning} 1s linear infinite;
`;
