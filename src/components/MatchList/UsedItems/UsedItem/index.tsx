import React, { useState } from 'react';
import { GameItem } from '@src/models/domains/Game';
import RoundSquareImage from '@src/components/common/RoundSquareImage';
import styled from 'styled-components';

type Props = {
  item: GameItem;
  tooltipContent: string;
};

const UsedItem: React.FC<Props> = ({ item, tooltipContent }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const onMouseOver = () => {
    setIsTooltipVisible(true);
  };

  const onMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <Container onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
      {isTooltipVisible && <Tooltip>{tooltipContent}</Tooltip>}
      <RoundSquareImage
        width={22}
        height={22}
        src={item.imageUrl}
        alt="아이템"
      />
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 22px;
  height: 22px;
`;

const Tooltip = styled.div`
  position: absolute;
  width: 200px;
  left: calc(-100px + 11px);
  bottom: calc(100% + 10px);
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.small};
  padding: 12px;
  z-index: 1;

  &:before {
    position: absolute;
    bottom: -5px;
    left: calc(50% - 5px);
    transform: rotate(45deg);
    content: '';
    display: block;
    width: 10px;
    height: 10px;
    background-color: ${(props) => props.theme.colors.black};
  }
`;

export default UsedItem;
