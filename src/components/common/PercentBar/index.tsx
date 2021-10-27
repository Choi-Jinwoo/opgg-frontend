import React from 'react';
import styled from 'styled-components';

type Item = {
  value: number;
  label: string;
  color: string;
};

type Props = {
  dataA: Item;
  dataB: Item;
  width: number;
};

const PercentBar: React.FC<Props> = ({ dataA, dataB, width }) => {
  const rate = width / (dataA.value + dataB.value);

  const dataABarItem = (
    <BarItem width={dataA.value * rate} bgColor={dataA.color} align="left">
      {dataA.label}
    </BarItem>
  );

  const dataBBarItem = (
    <BarItem width={dataB.value * rate} bgColor={dataB.color} align="right">
      {dataB.label}
    </BarItem>
  );

  return (
    <Container width={width}>
      {dataABarItem}
      {dataBBarItem}
    </Container>
  );
};

type ContainerProps = {
  width: number;
};

const Container = styled.div<ContainerProps>`
  display: flex;
  border-radius: 2px;
  overflow: hidden;
  width: ${(props) => props.width}px;
  height: 24px;
`;

type BarItemProps = {
  width: number;
  bgColor: string;
  align: 'left' | 'right';
};

const BarItem = styled.div<BarItemProps>`
  width: ${(props) => props.width}px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.tiny};
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.align === 'left' ? 'flex-start' : 'flex-end'};
  padding: 0px 4px;
  white-space: nowrap;
`;

export default PercentBar;