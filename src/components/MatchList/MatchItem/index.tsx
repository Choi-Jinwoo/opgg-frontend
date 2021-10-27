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
import Game from '@src/models/domains/Game';
import useGameTeams from '@src/hooks/useGameTeams';

type Props = {
  game: Game;
};

const ITEM_THEME = {
  lose: {
    label: '패배',
    bgColor: '#d6b5b2',
    borderColor: '#c0aba8',
    fontColor: theme.colors.darkRed,
    wardIcon: WARD_RED_ICON,
  },
  win: {
    label: '승리',
    bgColor: '#b0ceea',
    borderColor: '#a1b8cd',
    fontColor: theme.colors.darkBlue,
    wardIcon: WARD_BLUE_ICON,
  },
};

const MatchItem: React.FC<Props> = ({ game }) => {
  const [teams] = useGameTeams(game.gameId);

  const {
    gameType,
    isWin,
    champion,
    spells,
    items,
    peak,
    kda,
    stats,
    relativeTime,
    formattedGameLength,
  } = game;
  const { kill, assist, death, cs, csPerMin, contributionForKillRate } =
    stats.general;
  const { visionWardsBought } = stats.ward;

  const itemTheme = ITEM_THEME[isWin ? 'win' : 'lose'];

  return (
    <Container bgColor={itemTheme.bgColor} borderColor={itemTheme.borderColor}>
      <MatchInfo>
        <Text
          fontSize={theme.fontSizes.tiny}
          fontWeight="bold"
          color={theme.colors.gray8}
        >
          {gameType}
        </Text>
        <Text fontSize={theme.fontSizes.tiny} color={theme.colors.gray8}>
          {relativeTime}
        </Text>
        <Text
          fontSize={theme.fontSizes.tiny}
          fontWeight="bold"
          color={itemTheme.fontColor}
          marginTop={4}
        >
          {itemTheme.label}
        </Text>
        <Text fontSize={theme.fontSizes.tiny} color={theme.colors.gray8}>
          {formattedGameLength}
        </Text>
      </MatchInfo>

      <ChampionWrapper>
        <RoundImage src={champion.imageUrl} alt="챔피언" />

        <SpellWrapper>
          <RoundSquareImage src={spells[0].imageUrl} alt="스펠" />
          <RoundSquareImage src={spells[1].imageUrl} alt="스펠" />
        </SpellWrapper>

        <PeakWrapper>
          <RoundImage
            width={22}
            src={peak[0]}
            alt="룬"
            bgColor={theme.colors.black}
          />
          <RoundImage
            width={22}
            src={peak[1]}
            alt="룬"
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
          {`${kill}`}/
          {<Emphasize color={theme.colors.darkRed}>{` ${death} `}</Emphasize>}/
          {` ${assist}`}
        </Text>
        <Text color={theme.colors.gray7} fontSize={theme.fontSizes.tiny}>
          <Emphasize fontWeight="bold" color={theme.colors.black}>
            {kda}:1
          </Emphasize>{' '}
          평점
        </Text>
      </KDAWrapper>

      <MatchDetailWrapper>
        <Text fontSize={theme.fontSizes.tiny} color={theme.colors.gray7}>
          레벨 {champion.level}
        </Text>
        <Text fontSize={theme.fontSizes.tiny} color={theme.colors.gray7}>
          {cs} ({csPerMin}) CS
        </Text>
        <Text
          fontSize={theme.fontSizes.tiny}
          color={theme.colors.darkRed}
          fontWeight="bold"
        >
          킬관여 {contributionForKillRate}
        </Text>
      </MatchDetailWrapper>

      <ItemWrapper>
        <UsedItems items={items} />
        <WardIconWrapper>
          <WardIcon src={itemTheme.wardIcon} />
          <Text
            fontSize={theme.fontSizes.tiny}
            fontWeight="bold"
            marginLeft={4}
          >
            제어와드 {visionWardsBought}
          </Text>
        </WardIconWrapper>
      </ItemWrapper>

      {teams && <TeamChampions teamA={teams[0]} teamB={teams[1]} />}
    </Container>
  );
};

type ContainerProps = {
  bgColor: string;
  borderColor: string;
};

const Container = styled.li<ContainerProps>`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  width: 690px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
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

const MatchInfo = styled(ColumnWrapper)`
  width: 60px;
`;

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

export default MatchItem;
