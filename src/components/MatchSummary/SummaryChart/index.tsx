import React from 'react';
import PieChart from '@src/components/PieChart';
import theme from '@src/styles/theme';

type Props = {
  wins: number;
  losses: number;
  winningRate: number;
};

const SummaryChart: React.FC<Props> = ({ wins, losses, winningRate }) => {
  return (
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
  );
};

export default SummaryChart;
