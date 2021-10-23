import React from 'react';
import styled from 'styled-components';
import Text from '@src/components/Text';
import theme from '@src/styles/theme';
import RoundImage from '@src/components/RoundImage';
import NO_CHAMPION_ICON from '@src/assets/icons/no-champion-icon.svg';

const NO_CHAMPION_TEXT = '챔피언 정보가 없습니다';

const NoChampionData: React.FC = () => {
  return (
    <Container>
      <RoundImage width={34} src={NO_CHAMPION_ICON} alt={NO_CHAMPION_TEXT} />
      <Text
        fontSize={theme.fontSizes.tiny}
        color={theme.colors.gray5}
        marginLeft={8}
      >
        {NO_CHAMPION_TEXT}
      </Text>
    </Container>
  );
};

const Container = styled.li`
  margin: 8px 0px;
  display: flex;
  align-items: center;
`;

export default NoChampionData;
