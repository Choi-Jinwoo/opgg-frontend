import React from 'react';
import styled from 'styled-components';
import useGameTeams from '@src/hooks/useGameTeams';

type Props = {
  gameId: string;
};

const TeamChampions: React.FC<Props> = ({ gameId }) => {
  const [teams] = useGameTeams(gameId);

  if (teams === null) return <></>;

  const teamAChampions = teams[0].players.map(
    ({ champion, summonerName }, index) => (
      <ChampionWrapper key={index}>
        <ChampionImage src={champion.imageUrl}></ChampionImage>
        <ChampionName>{summonerName}</ChampionName>
      </ChampionWrapper>
    ),
  );

  const teamBChampions = teams[1].players.map(
    ({ champion, summonerName }, index) => (
      <ChampionWrapper key={index}>
        <ChampionImage src={champion.imageUrl}></ChampionImage>
        <ChampionName>{summonerName}</ChampionName>
      </ChampionWrapper>
    ),
  );

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
