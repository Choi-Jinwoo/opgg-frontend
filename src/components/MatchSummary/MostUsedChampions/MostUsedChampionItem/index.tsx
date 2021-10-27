import React from 'react';
import styled from 'styled-components';
import RoundImage from '@src/components/common/RoundImage';
import Champion from '@src/models/domains/Champion';
import Text from '@src/components/common/Text';
import theme from '@src/styles/theme';
import ConditionalColorFont from '@src/components/common/ConditionalColorFont';
import winningRateColorCondition from '@src/lib/conditionalColor/WinningRateColorCondition';
import kdaColorCondition from '@src/lib/conditionalColor/KDAColorCondition';

type Props = {
  champion: Champion;
};

const MostUsedChampionItem: React.FC<Props> = ({ champion }) => {
  const { imageUrl, name, winningRate, wins, losses, kda } = champion;

  return (
    <Container>
      <RoundImage width={34} src={imageUrl} alt={name} />

      <ChampionInfoWrapper>
        <Text fontSize={theme.fontSizes.medium}>{name}</Text>

        <ChampionRateWrapper>
          <ConditionalColorFont
            value={winningRate}
            condition={winningRateColorCondition}
          >
            <Text fontWeight="bold" fontSize={theme.fontSizes.tiny}>
              {winningRate}%
            </Text>
          </ConditionalColorFont>

          <Text
            fontSize={theme.fontSizes.tiny}
            color={theme.colors.gray8}
            marginLeft={8}
          >{`(${wins}승 ${losses}패)`}</Text>

          <ConditionalColorFont
            value={Number(kda)}
            condition={kdaColorCondition}
          >
            <Text fontSize={theme.fontSizes.tiny} marginLeft={8}>
              {kda} 평점
            </Text>
          </ConditionalColorFont>
        </ChampionRateWrapper>
      </ChampionInfoWrapper>
    </Container>
  );
};

const Container = styled.li`
  margin: 8px 0px;
  display: flex;
  align-items: center;
`;

const ChampionInfoWrapper = styled.div`
  margin-left: 8px;
`;

const ChampionRateWrapper = styled.div``;

export default MostUsedChampionItem;
