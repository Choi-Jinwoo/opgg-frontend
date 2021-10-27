import PercentBar from '@src/components/common/PercentBar';
import RoundImage from '@src/components/common/RoundImage';
import Text from '@src/components/common/Text';
import RecentChampion from '@src/models/domains/recentChampion';
import theme from '@src/styles/theme';
import React from 'react';
import styled from 'styled-components';

type Props = {
  champion: RecentChampion;
};

const RecentChampionItem: React.FC<Props> = ({ champion }) => {
  const { imageUrl, winningRate, wins, losses, name } = champion;

  return (
    <Container>
      <RoundImage width={32} src={imageUrl} alt={name} />
      <ChampionName>{name}</ChampionName>
      <Text fontSize={theme.fontSizes.tiny} color={theme.colors.gray6}>
        {winningRate}%
      </Text>
      <PercentBar
        width={123}
        dataA={{
          value: wins,
          color: theme.colors.blue,
          label: `${wins}승`,
        }}
        dataB={{
          value: losses,
          color: theme.colors.lightRed,
          label: `${losses}패`,
        }}
      />
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

const ChampionName = styled.span`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray7};
  font-weight: bold;
  overflow: hidden;
  width: 52px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default RecentChampionItem;
