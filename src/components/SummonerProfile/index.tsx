import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import Text from '../common/Text';
import PreviousTiers from './PreviousTier';
import SummonerImage from './SummonerImage';
import theme from '@src/styles/theme';
import summonerStore from '@src/stores/summonerStore';
import Heading from '../common/Heading';

const SummonerProfile: React.FC = () => {
  const { summoner } = summonerStore;

  if (summoner === null) {
    return <SummonerNotFound>소환사 없음</SummonerNotFound>;
  }

  const {
    name,
    previousTiers,
    level,
    profileBorderImageUrl,
    profileImageUrl,
    ladderRank,
  } = summoner;

  return (
    <Container>
      <PreviousTiers tiers={previousTiers} />

      <SummonerMainProfileWrapper>
        <SummonerImage
          profileBorderImageUrl={profileBorderImageUrl}
          profileImageUrl={profileImageUrl}
          level={level}
        />

        <SummonerInfo>
          <Heading>{name}</Heading>
          <Text fontSize={theme.fontSizes.small} color={theme.colors.gray5}>
            {/* TODO: bold 처리 수정 필요 */}
            레더 랭킹<b>{ladderRank.rank}</b>위 (상위{' '}
            {ladderRank.rankPercentOfTop}%)
          </Text>
        </SummonerInfo>
      </SummonerMainProfileWrapper>
    </Container>
  );
};

const Container = styled.section``;

const SummonerMainProfileWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const SummonerInfo = styled.div`
  margin-left: 32px;
`;

const SummonerNotFound = styled.div``;

export default observer(SummonerProfile);
