import { GameItem } from '@src/models/domains/Game';
import React from 'react';
import styled from 'styled-components';
import UsedItem from '../UsedItem';

const MAX_ITEMS = 6;

type Props = {
  items: GameItem[];
};

const TOOLTIP_CONTENT = '아이템';

const UsedItems: React.FC<Props> = ({ items }) => {
  const ward = items[items.length - 1];

  const composeItemList = () => {
    const itemList = [];
    for (let i = 0; i < MAX_ITEMS; i += 1) {
      if (i < items.length - 1) {
        itemList.push(
          <UsedItem key={i} item={items[i]} tooltipContent={TOOLTIP_CONTENT} />,
        );
      } else {
        itemList.push(<EmptyItem key={i} />);
      }
    }

    return itemList;
  };

  return (
    <Container>
      <ItemList>{composeItemList()}</ItemList>
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
