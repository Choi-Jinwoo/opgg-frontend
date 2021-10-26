import React from 'react';
import styled from 'styled-components';
import RoundImage from '@src/components/common/RoundImage';
import Text from '@src/components/common/Text';
import theme from '@src/styles/theme';

const MostChampionItem: React.FC = () => {
  return (
    <Container>
      <RoundImage
        src="https://opgg-static.akamaized.net/images/lol/champion/Galio.png?image=w_30&v=1"
        alt=""
      />

      <ItemWrapper>
        <Text
          fontSize={theme.fontSizes.small}
          color={theme.colors.gray7}
          fontWeight="bold"
        >
          신지드
        </Text>
        <Text fontSize={theme.fontSizes.tiny} color={theme.colors.gray6}>
          CS 78.8
        </Text>
      </ItemWrapper>

      <AlignCenterItemWrapper>
        <Text
          fontSize={theme.fontSizes.small}
          color={theme.colors.gray7}
          fontWeight="bold"
        >
          2.46:1 평점
        </Text>
        <Text fontSize={theme.fontSizes.tiny} color={theme.colors.gray6}>
          6.6 / 6.1 / 10.7
        </Text>
      </AlignCenterItemWrapper>

      <AlignCenterItemWrapper>
        <Text
          fontSize={theme.fontSizes.small}
          color={theme.colors.gray7}
          fontWeight="bold"
        >
          79%
        </Text>
        <Text fontSize={theme.fontSizes.tiny} color={theme.colors.gray6}>
          35게임
        </Text>
      </AlignCenterItemWrapper>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  algin-items: center;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 12px;
`;

const AlignCenterItemWrapper = styled(ItemWrapper)`
  align-items: center;
`;

export default MostChampionItem;
