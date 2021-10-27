import { GameItem } from '@src/models/domains/Game';
import React from 'react';
import styled from 'styled-components';
import UsedItem from './UsedItem';

const MAX_ITEMS = 6;

type Props = {
  items: GameItem[];
};

const TOOLTIP_CONTENT = '아이템';

const UsedItems: React.FC<Props> = ({ items }) => {
  const ward = items[items.length - 1];

  const usedItems = new Array(MAX_ITEMS).fill(null).map((_, index) => {
    if (index < items.length - 1)
      return (
        <UsedItem
          key={index}
          item={items[index]}
          tooltipContent={TOOLTIP_CONTENT}
        />
      );

    return <EmptyItem key={index} />;
  });

  return (
    <Container>
      <ItemList>{usedItems}</ItemList>
      <WardWrapper>
        <UsedItem item={ward} tooltipContent={TOOLTIP_CONTENT} />
      </WardWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const ItemList = styled.div`
  display: grid;
  grid-template-columns: 22px 22px 22px;
  column-gap: 2px;
  row-gap: 2px;
  margin-right: 2px;
`;

const WardWrapper = styled.div`
  display: grid;
  grid-template-columns: 22px;
  column-gap: 2px;
  row-gap: 2px;
`;

const EmptyItem = styled.div`
  background-color: ${(props) => props.theme.colors.black};
  opacity: 0.2;
  width: 22px;
  height: 22px;
`;

export default UsedItems;
