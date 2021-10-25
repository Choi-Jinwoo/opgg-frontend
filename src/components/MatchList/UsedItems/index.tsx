import RoundSquareImage from '@src/components/common/RoundSquareImage';
import { GameItem } from '@src/models/game';
import React from 'react';
import styled from 'styled-components';

const MAX_ITEMS = 6;

type Props = {
  items: GameItem[];
};

const UsedItems: React.FC<Props> = ({ items }) => {
  const ward = items[items.length - 1];

  const composeItemList = () => {
    const itemList = [];
    for (let i = 0; i < MAX_ITEMS; i += 1) {
      if (i < items.length - 1) {
        itemList.push(
          <RoundSquareImage
            width={22}
            height={22}
            src={items[i].imageUrl}
            alt="아이템"
            key={i}
          />,
        );
      } else {
        itemList.push(<EmptyItem />);
      }
    }

    return itemList;
  };

  return (
    <Container>
      <ItemWrapper>{composeItemList()}</ItemWrapper>
      <WardWrapper>
        <RoundSquareImage
          width={22}
          height={22}
          src={ward.imageUrl}
          alt="와드"
        />
      </WardWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const ItemWrapper = styled.div`
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
