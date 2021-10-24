import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  // pixel
  top: number;
  isVisible: boolean;
};

// Parent should be relative position
const DropDown: React.FC<Props> = ({ children, top, isVisible }) => {
  return (
    <Container isVisible={isVisible} top={top}>
      {children}
    </Container>
  );
};

type ContainerProps = {
  top: number;
  isVisible: boolean;
};

const Container = styled.div<ContainerProps>`
  ${(props) =>
    !props.isVisible &&
    css`
      display: none;
    `}

  position: absolute;
  width: 100%;
  top: ${(props) => props.top}px;
`;

export default DropDown;
