import styled from '@emotion/styled';

export const ModalContainerStyle = styled.div`
  position: 'absolute',
  top: 0,
  left: 0,
  display: 'flex',
  justify-content: 'center',
  align-items: 'center',
  width: '100%',
  height: '100%',
`;

export const Overlay = styled.div`
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  opacity: 0.3,
  background-color: 'Black',
`;

export const ModalContent = styled.div`
  border-radius: rem(5),
  z-index: 100,
`;
