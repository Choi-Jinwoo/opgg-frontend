import React from 'react';
import styled from 'styled-components';
import RoundImage from '@src/components/common/RoundImage';
import Champion from '@src/models/domains/UsedChampion';
import Text from '@src/components/common/Text';
import theme from '@src/styles/theme';
import WinRateTemplate from '@src/components/template/WinRateTemplate';
import KDARateTemplate from '@src/components/template/KDARateTemplate';

type Props = {
  champion: Champion;
};

const MostUsedChampionItem: React.FC<Props> = ({ champion }) => {
  const { imageUrl, name, wins, losses, winRate, kdaRate } = champion;

  return (
    <Container>
      <RoundImage width={34} src={imageUrl} alt={name} />

      <ChampionInfoWrapper>
        <Text fontSize={theme.fontSizes.medium}>{name}</Text>

        <ChampionRateWrapper>
          <Text fontWeight="bold" fontSize={theme.fontSizes.tiny}>
            <WinRateTemplate winRate={winRate} />
          </Text>

          <Text
            fontSize={theme.fontSizes.tiny}
            color={theme.colors.gray8}
            marginLeft={8}
          >{`(${wins}승 ${losses}패)`}</Text>

          <Text fontSize={theme.fontSizes.tiny} marginLeft={8}>
            <KDARateTemplate kdaRate={kdaRate} hasPostfix={false} /> 평점
          </Text>
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
