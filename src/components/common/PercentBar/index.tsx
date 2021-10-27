import React from 'react';
import styled from 'styled-components';

type Item = {
  value: number;
  label: string;
  color: string;
};

type Props = {
  items: Item[];
  width: number;
};

const PercentBar: React.FC<Props> = ({ items, width }) => {
  const amount = items.reduce(
    (previous, current) => previous + current.value,
    0,
  );

  const rate = amount / items.length;

  const barItems = items.map(({ color, label, value }, index) => (
    <BarItem key={index} bgColor={color} width={value * rate}>
      {label}
    </BarItem>
  ));

  return <Container width={width}>{barItems}</Container>;
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
};

const BarItem = styled.div<BarItemProps>`
  display: flex;
  align-items: center;
  width: ${(props) => props.width}px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.tiny};
  padding: 0px 4px;
  white-space: nowrap;
  justify-content: center;

  &:first-child {
    justify-content: flex-start;
  }

  &:last-child {
    justify-content: flex-end;
  }
`;

export default PercentBar;
