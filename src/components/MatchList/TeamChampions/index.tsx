import React from 'react';
import { GameChampion } from '@src/models/game';
import styled from 'styled-components';

type Player = {
  champion: GameChampion;
  summonerName: string;
};

type Props = {
  teamA: Player[];
  teamB: Player[];
};

const TeamChampions: React.FC<Props> = ({ teamA, teamB }) => {
  const teamAChampions = teamA.map((player, index) => (
    <ChampionWrapper key={index}>
      <ChampionImage src={player.champion.imageUrl}></ChampionImage>
      <ChampionName>{player.summonerName}</ChampionName>
    </ChampionWrapper>
  ));

  const teamBChampions = teamB.map((player, index) => (
    <ChampionWrapper key={index}>
      <ChampionImage src={player.champion.imageUrl}></ChampionImage>
      <ChampionName>{player.summonerName}</ChampionName>
    </ChampionWrapper>
  ));

  return (
    <Container>
      <ChampionList>{teamAChampions}</ChampionList>
      <ChampionList>{teamBChampions}</ChampionList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  & > * + * {
    margin-left: 8px;
  }
`;

const ChampionWrapper = styled.li`
  display: flex;
  align-items: center;
`;

const ChampionName = styled.span`
  font-size: ${(props) => props.theme.fontSizes.tiny};
  color: ${(props) => props.theme.colors.black};
  width: 46px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-left: 8px;
`;

const ChampionImage = styled.img`
  width: 16px;
  height: 16px;
  border: 1px solid ${(props) => props.theme.colors.black};
`;

const ChampionList = styled.ul`
  & > * + * {
    margin-top: 4px;
  }
`;

export default TeamChampions;
