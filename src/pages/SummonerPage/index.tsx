import Layout from '@src/components/common/Layout';
import CurrentTier from '@src/components/CurrentTier';
import MatchList from '@src/components/MatchList';
import MatchSummary from '@src/components/MatchSummary';
import MostInfo from '@src/components/MostInfo';
import SummonerProfile from '@src/components/SummonerProfile';
import useMatches from '@src/hooks/useMatches';
import useMostInfo from '@src/hooks/useMostInfo';
import useSummonerName from '@src/hooks/useSummonerName';
import useSummonerProfile from '@src/hooks/useSummonerProfile';
import query from '@src/utils/query';
import { observer } from 'mobx-react';
import React from 'react';
import { useLocation } from 'react-router';
import styled from 'styled-components';

const SummonerPage: React.FC = () => {
  const { search } = useLocation();
  useSummonerName();
  useSummonerProfile();
  useMatches();
  useMostInfo();

  const summonerName = query.get('summoner', search);

  return (
    <Layout
      title={`${summonerName} | OPGG`}
      description={`${summonerName}소환사에 대한 정보`}
    >
      <SummonerProfile />
      <MainContent>
        <SideSection>
          <CurrentTier />
          <MostInfo />
        </SideSection>

        <MainSection>
          <MatchSummary />
          <MatchList />
        </MainSection>
      </MainContent>
    </Layout>
  );
};

const MainContent = styled.main`
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  width: ${(props) => props.theme.innerSizes.desktop};
  justify-content: space-between;
`;

const SideSection = styled.aside``;

const MainSection = styled.section``;

export default observer(SummonerPage);
