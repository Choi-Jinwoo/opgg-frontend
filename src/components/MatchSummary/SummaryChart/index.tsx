import React from 'react';
import PieChart from '@src/components/common/PieChart';
import theme from '@src/styles/theme';
import styled from 'styled-components';
import Text from '@src/components/common/Text';
import matchStore from '@src/stores/matchStore';
import { observer } from 'mobx-react';
import Emphasize from '@src/components/common/Emphasize';
import ConditionalColorFont from '@src/components/common/ConditionalColorFont';
import kdaColorCondition from '@src/lib/conditionalColor/KDAColorCondition';

const SummaryChart: React.FC = () => {
  if (matchStore.summonerMatchSummary === null) {
    // TODO: 로딩 적용
    return <div>없음</div>;
  }

  const { wins, losses, winningRate, totalGames, kills, deaths, assists, kda } =
    matchStore.summonerMatchSummary;

  return (
    <Container>
      <ChartWrapper>
        <Text
          fontSize={theme.fontSizes.medium}
          color={theme.colors.gray7}
          marginBottom={20}
        >{`${totalGames}전 ${wins}승 ${losses}패`}</Text>
        <PieChart
          size={100}
          title={`${winningRate}%`}
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
          {kills}/<Emphasize color={theme.colors.red}>{deaths}</Emphasize>/
          {assists}
        </Text>
        <ConditionalColorFont value={kda} condition={kdaColorCondition}>
          <Text fontSize={theme.fontSizes.regular}>{`${kda}:1`}</Text>
        </ConditionalColorFont>
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
