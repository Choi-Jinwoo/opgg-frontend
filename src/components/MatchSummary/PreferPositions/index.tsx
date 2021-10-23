import React, { useMemo } from 'react';
import { observer } from 'mobx-react';
import matchStore from '@src/stores/matchStore';
import styled from 'styled-components';
import PreferPositionItem from './PreferPositionItem';

const PreferPositions: React.FC = () => {
  const { summonerPositions } = matchStore;

  const totalGames = useMemo(
    () => summonerPositions?.reduce((prev, curr) => prev + curr.games, 0) ?? 1,
    [summonerPositions],
  );

  // TODO: 없음 설정
  if (summonerPositions === null) {
    return <div>없음</div>;
  }

  const preferPositionItems = summonerPositions.map((position, index) => (
    <PreferPositionItem
      key={index}
      position={position}
      rate={(position.games / totalGames) * 100}
    />
  ));

  return (
    <Container>
      <PositionList>{preferPositionItems}</PositionList>
    </Container>
  );
};

const Container = styled.div``;

const PositionList = styled.ul``;

export default observer(PreferPositions);
