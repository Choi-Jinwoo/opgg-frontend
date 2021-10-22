import React from 'react';
import styled from 'styled-components';

type Props = {
  // pixel
  top: number;
};

// Parent should be relative position
const DropDown: React.FC<Props> = ({ children, top }) => {
  return <Container top={top}>{children}</Container>;
};

type ContainerProps = {
  top: number;
};

const Container = styled.div<ContainerProps>`
  position: absolute;
  width: 100%;
  top: ${(props) => props.top}px;
`;

export default DropDown;
