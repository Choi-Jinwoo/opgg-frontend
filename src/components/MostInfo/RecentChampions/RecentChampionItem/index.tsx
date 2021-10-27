import PercentBar from '@src/components/common/PercentBar';
import RoundImage from '@src/components/common/RoundImage';
import Text from '@src/components/common/Text';
import theme from '@src/styles/theme';
import React from 'react';
import styled from 'styled-components';

const RecentChampionItem: React.FC = () => {
  return (
    <Container>
      <RoundImage
        width={32}
        src="https://opgg-static.akamaized.net/images/lol/champion/Veigar.png?image=q_auto&v=1591083841"
        alt=""
      />
      <ChampionName>신지드</ChampionName>
      <Text fontSize={theme.fontSizes.tiny} color={theme.colors.gray3}>
        69%
      </Text>
      <PercentBar
        width={123}
        dataA={{
          value: 6,
          color: theme.colors.blue,
          label: '6승',
        }}
        dataB={{
          value: 7,
          color: theme.colors.lightRed,
          label: '7패',
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
  width: 40px;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export default RecentChampionItem;
