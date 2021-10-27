import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import matchStore from '@src/stores/matchStore';
import Text from '@src/components/common/Text';
import theme from '@src/styles/theme';
import PreferPositionItem from './PreferPositionItem';

const PreferPositions: React.FC = () => {
  const { summonerPositions } = matchStore;

  // TODO: 없음 설정
  if (summonerPositions === null) {
    return <div>없음</div>;
  }

  const totalGames = summonerPositions.reduce(
    (prev, curr) => prev + curr.games,
    0,
  );

  const preferPositionItems = summonerPositions.map((position, index) => (
    <PreferPositionItem
      key={index}
      position={position}
      rate={(position.games / totalGames) * 100}
    />
  ));

  return (
    <Container>
      <Text
        fontSize={theme.fontSizes.medium}
        color={theme.colors.gray7}
        marginBottom={20}
      >
        선호 포지션 (랭크)
      </Text>

      <PositionList>{preferPositionItems}</PositionList>
    </Container>
  );
};

const Container = styled.div``;

const PositionList = styled.ul``;

export default observer(PreferPositions);
