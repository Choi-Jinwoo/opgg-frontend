import RoundImage from '@src/components/common/RoundImage';
import Text from '@src/components/common/Text';
import theme from '@src/styles/theme';
import MostChampion from '@src/models/domains/MostChampion';
import React from 'react';
import styled from 'styled-components';
import KDARateTemplate from '@src/components/template/KDARateTemplate';
import KDATemplate from '@src/components/template/KDATemplate';
import WinRateTemplate from '@src/components/template/WinRateTemplate';

type Props = {
  champion: MostChampion;
};

const MostChampionItem: React.FC<Props> = ({ champion }) => {
  const {
    name,
    imageUrl,
    cs,
    games,
    kdaRate,
    winRate,
    avgKills,
    avgDeaths,
    avgAssists,
  } = champion;

  return (
    <Container>
      <RoundImage src={imageUrl} alt={name} />

      <ItemWrapper>
        <ChampionName>{name}</ChampionName>
        <Text fontSize={theme.fontSizes.tiny} color={theme.colors.gray6}>
          CS {cs}
        </Text>
      </ItemWrapper>

      <KDAWrapper>
        <Text
          fontSize={theme.fontSizes.small}
          color={theme.colors.gray7}
          fontWeight="bold"
        >
          <KDARateTemplate kdaRate={kdaRate} /> 평점
        </Text>
        <Text fontSize={theme.fontSizes.tiny} color={theme.colors.gray6}>
          <KDATemplate
            kill={avgKills.toFixed(1)}
            death={avgDeaths.toFixed(1)}
            assist={avgAssists.toFixed(1)}
          />
        </Text>
      </KDAWrapper>

      <AlignCenterItemWrapper>
        <Text
          fontSize={theme.fontSizes.small}
          color={theme.colors.gray7}
          fontWeight="bold"
        >
          <WinRateTemplate winRate={winRate} />
        </Text>
        <Text fontSize={theme.fontSizes.tiny} color={theme.colors.gray6}>
          {games}게임
        </Text>
      </AlignCenterItemWrapper>
    </Container>
  );
};

const Container = styled.li`
  padding: 2px 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray3};

  &:last-child {
    border-bottom: none;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 8px;
`;

const ChampionName = styled.span`
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.gray7};
  font-weight: bold;
  overflow: hidden;
  width: 64px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const AlignCenterItemWrapper = styled(ItemWrapper)`
  align-items: center;
`;

const KDAWrapper = styled(ItemWrapper)`
  width: 88px;
  align-items: center;
`;

export default MostChampionItem;
