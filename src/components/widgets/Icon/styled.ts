import styled from '@emotion/styled';

interface IconWrapperProps {
  size: string;
}

export const IconWrapper = styled.div<IconWrapperProps>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
