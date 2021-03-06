import React from 'react';
import Text from '@src/components/common/Text';
import styled from 'styled-components';
import theme from '@src/styles/theme';
import Emphasize from '@src/components/common/Emphasize';
import TOP from '@src/assets/icons/top-icon.svg';
import JNG from '@src/assets/icons/jng-icon.svg';
import MID from '@src/assets/icons/mid-icon.svg';
import ADC from '@src/assets/icons/adc-icon.svg';
import SUP from '@src/assets/icons/sup-icon.svg';
import SummonerPosition, {
  Positions,
} from '@src/models/domains/SummonerPosition';

const POSITION_META = {
  [Positions.TOP]: {
    image: TOP,
    name: '탑',
  },
  [Positions.JNG]: {
    image: JNG,
    name: '정글',
  },
  [Positions.MID]: {
    image: MID,
    name: '미드',
  },
  [Positions.ADC]: {
    image: ADC,
    name: '원딜',
  },
  [Positions.SUP]: {
    image: SUP,
    name: '서포터',
  },
};

type Props = {
  position: SummonerPosition;
  rate: number;
};

const PreferPositionItem: React.FC<Props> = ({ position, rate }) => {
  const { winRate, position: positionKey } = position;
  const { image, name } = POSITION_META[positionKey];

  return (
    <Container>
      <PositionImage src={image} alt={name} />
      <PositionInfoWrapper>
        <Text fontSize={theme.fontSizes.medium}>{name}</Text>
        <RateWrapper>
          <Text
            fontSize={theme.fontSizes.tiny}
            fontWeight="bold"
            color={theme.colors.blue}
          >
            {rate.toFixed(0)}%
          </Text>

          <Text
            fontSize={theme.fontSizes.tiny}
            color={theme.colors.gray7}
            marginLeft={8}
          >
            승률{' '}
            <Emphasize color={theme.colors.black}>
              {winRate.toFixed(0)}%
            </Emphasize>
          </Text>
        </RateWrapper>
      </PositionInfoWrapper>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  align-items: center;
  margin: 8px 0px;
`;

const PositionImage = styled.img`
  width: 28px;
  height: 28px;
`;

const PositionInfoWrapper = styled.div`
  margin-left: 12px;
`;

const RateWrapper = styled.div``;

export default PreferPositionItem;
