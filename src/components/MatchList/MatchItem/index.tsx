import Emphasize from '@src/components/common/Emphasize';
import RoundImage from '@src/components/common/RoundImage';
import RoundSquareImage from '@src/components/common/RoundSquareImage';
import Text from '@src/components/common/Text';
import theme from '@src/styles/theme';
import React from 'react';
import styled from 'styled-components';
import UsedItems from '../UsedItems';
import WARD_RED_ICON from '@src/assets/images/ward-red-icon.png';
import WARD_BLUE_ICON from '@src/assets/images/ward-blue-icon.png';
import TeamChampions from '../TeamChampions';

const MatchItem: React.FC = () => {
  return (
    <Container>
      <MatchInfo>
        <Text
          fontSize={theme.fontSizes.tiny}
          fontWeight="bold"
          color={theme.colors.gray8}
        >
          솔랭
        </Text>
        <Text fontSize={theme.fontSizes.tiny} color={theme.colors.gray8}>
          하루전
        </Text>
        <Text
          fontSize={theme.fontSizes.tiny}
          fontWeight="bold"
          color={theme.colors.darkRed}
          marginTop={4}
        >
          패배
        </Text>
        <Text fontSize={theme.fontSizes.tiny} color={theme.colors.gray8}>
          15분 53초
        </Text>
      </MatchInfo>

      <ChampionWrapper>
        <RoundImage
          src="https://opgg-static.akamaized.net/images/lol/champion/Malzahar.png"
          alt=""
        />

        <SpellWrapper>
          <RoundSquareImage
            src="https://opgg-static.akamaized.net/images/lol/spell/SummonerTeleport.png"
            alt=""
          />

          <RoundSquareImage
            src="https://opgg-static.akamaized.net/images/lol/spell/SummonerFlash.png"
            alt=""
          />
        </SpellWrapper>

        <PeakWrapper>
          <RoundImage
            width={22}
            src="https://opgg-static.akamaized.net/images/lol/perk/8229.png"
            alt=""
            bgColor={theme.colors.black}
          />
          <RoundImage
            width={22}
            src="https://opgg-static.akamaized.net/images/lol/perkStyle/8300.png"
            alt=""
            bgColor={`${theme.colors.black}10`}
          />
        </PeakWrapper>
      </ChampionWrapper>

      <KDAWrapper>
        <Text
          fontWeight="bold"
          fontSize={theme.fontSizes.regular}
          color={theme.colors.gray7}
        >
          {2}/{<Emphasize color={theme.colors.darkRed}>2</Emphasize>}/{1}
        </Text>
        <Text color={theme.colors.gray7} fontSize={theme.fontSizes.tiny}>
          <Emphasize fontWeight="bold" color={theme.colors.black}>
            1.50:1
          </Emphasize>{' '}
          평점
        </Text>
      </KDAWrapper>

      <MatchDetailWrapper>
        <Text fontSize={theme.fontSizes.tiny} color={theme.colors.gray7}>
          레벨8
        </Text>
        <Text fontSize={theme.fontSizes.tiny} color={theme.colors.gray7}>
          20 (1.3) CS
        </Text>
        <Text
          fontSize={theme.fontSizes.tiny}
          color={theme.colors.darkRed}
          fontWeight="bold"
        >
          킬관여 38%
        </Text>
      </MatchDetailWrapper>

      <ItemWrapper>
        <UsedItems
          items={[
            {
              imageUrl:
                'https://opgg-static.akamaized.net/images/lol/item/1026.png',
            },
            {
              imageUrl:
                'https://opgg-static.akamaized.net/images/lol/item/3198.png',
            },
            {
              imageUrl:
                'https://opgg-static.akamaized.net/images/lol/item/3020.png',
            },
            {
              imageUrl:
                'https://opgg-static.akamaized.net/images/lol/item/1026.png',
            },
            {
              imageUrl:
                'https://opgg-static.akamaized.net/images/lol/item/3364.png',
            },
          ]}
        />
        <WardIconWrapper>
          <BlueWardIcon />
          <Text
            fontSize={theme.fontSizes.tiny}
            fontWeight="bold"
            marginLeft={4}
          >
            제어와드 1
          </Text>
        </WardIconWrapper>
      </ItemWrapper>

      <TeamChampions
        teamB={[
          {
            champion: {
              imageUrl:
                'https://opgg-static.akamaized.net/images/lol/champion/Tristana.png',
              level: 7,
            },
            summonerName: 'qwetyz',
          },
          {
            champion: {
              imageUrl:
                'https://opgg-static.akamaized.net/images/lol/champion/Lucian.png',
              level: 9,
            },
            summonerName: 'SANDBOX Lonely',
          },
          {
            champion: {
              imageUrl:
                'https://opgg-static.akamaized.net/images/lol/champion/Tristana.png',
              level: 7,
            },
            summonerName: 'KZ Quad',
          },
          {
            champion: {
              imageUrl:
                'https://opgg-static.akamaized.net/images/lol/champion/Anivia.png',
              level: 31,
            },
            summonerName: 'feng ji xu chui',
          },
          {
            champion: {
              imageUrl:
                'https://opgg-static.akamaized.net/images/lol/champion/Viktor.png',
              level: 11,
            },
            summonerName: '요붕스1',
          },
        ]}
        teamA={[
          {
            champion: {
              imageUrl:
                'https://opgg-static.akamaized.net/images/lol/champion/Tristana.png',
              level: 7,
            },
            summonerName: 'qwetyz',
          },
          {
            champion: {
              imageUrl:
                'https://opgg-static.akamaized.net/images/lol/champion/Lucian.png',
              level: 9,
            },
            summonerName: 'SANDBOX Lonely',
          },
          {
            champion: {
              imageUrl:
                'https://opgg-static.akamaized.net/images/lol/champion/Tristana.png',
              level: 7,
            },
            summonerName: 'KZ Quad',
          },
          {
            champion: {
              imageUrl:
                'https://opgg-static.akamaized.net/images/lol/champion/Anivia.png',
              level: 31,
            },
            summonerName: 'feng ji xu chui',
          },
          {
            champion: {
              imageUrl:
                'https://opgg-static.akamaized.net/images/lol/champion/Viktor.png',
              level: 11,
            },
            summonerName: '요붕스1',
          },
        ]}
      />
    </Container>
  );
};

const Container = styled.li`
  display: flex;
`;

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px 4px;

  & > * + * {
    margin-top: 4px;
  }
`;

const MatchInfo = styled(ColumnWrapper)``;

const ChampionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SpellWrapper = styled(ColumnWrapper)``;

const PeakWrapper = styled(ColumnWrapper)``;

const KDAWrapper = styled(ColumnWrapper)``;

const MatchDetailWrapper = styled(ColumnWrapper)``;

const ItemWrapper = styled(ColumnWrapper)``;

const WardIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WardIcon = styled.img`
  width: 16px;
  height: 16px;
`;

const BlueWardIcon = styled(WardIcon).attrs({
  src: WARD_BLUE_ICON,
  alt: '제어와드',
})``;

const RedWardIcon = styled(WardIcon).attrs({
  src: WARD_RED_ICON,
  alt: '제어와드',
})``;

export default MatchItem;
