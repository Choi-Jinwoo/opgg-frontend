import React from 'react';
import PieChart from '@src/components/common/PieChart';
import theme from '@src/styles/theme';
import styled from 'styled-components';
import Text from '@src/components/common/Text';
import matchStore from '@src/stores/matchStore';
import { observer } from 'mobx-react';
import KDATemplate from '@src/components/template/KDATemplate';
import KDARateTemplate from '@src/components/template/KDARateTemplate';
import SummaryChartSkeletonUI from './SummaryChartSkeletonUI';

const SummaryChart: React.FC = () => {
  const { summonerMatchSummary } = matchStore;
  if (summonerMatchSummary === null) {
    return <SummaryChartSkeletonUI />;
  }

  const { wins, losses, winRate, games, kills, deaths, assists, kdaRate } =
    summonerMatchSummary;

  return (
    <Container>
      <ChartWrapper>
        <Text
          fontSize={theme.fontSizes.medium}
          color={theme.colors.gray7}
          marginBottom={20}
        >{`${games}전 ${wins}승 ${losses}패`}</Text>
        <PieChart
          size={100}
          title={`${winRate.toFixed(0)}%`}
          bgColor={theme.colors.gray2}
          titleColor={theme.colors.gray7}
          data={[
            {
              key: 'wins',
              value: wins,
              color: theme.colors.blue,
            },
            {
              key: 'loses',
              value: losses,
              color: theme.colors.lightRed,
            },
          ]}
        />
      </ChartWrapper>

      <KDAWrapper>
        <Text
          fontSize={theme.fontSizes.tiny}
          fontWeight="bold"
          marginBottom={8}
        >
          <KDATemplate kill={kills} death={deaths} assist={assists} />
        </Text>
        <Text fontSize={theme.fontSizes.regular}>
          <KDARateTemplate kdaRate={kdaRate} />
        </Text>
      </KDAWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
`;

const KDAWrapper = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default observer(SummaryChart);
