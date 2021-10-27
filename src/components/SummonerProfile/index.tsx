import React from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';
import Text from '../common/Text';
import PreviousTiers from './PreviousTier';
import SummonerImage from './SummonerImage';
import theme from '@src/styles/theme';
import summonerStore from '@src/stores/summonerStore';
import Heading from '../common/Heading';
import Emphasize from '../common/Emphasize';
import SummonerProfileSkeletonUI from './SummonerProfileSkeletonUI';

const SummonerProfile: React.FC = () => {
  const { summoner } = summonerStore;

  if (summoner === null) {
    return <SummonerProfileSkeletonUI />;
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
      <InnerWrapper>
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
              레더 랭킹<Emphasize>{ladderRank.rank}</Emphasize>위 (상위{' '}
              {ladderRank.rankPercentOfTop}%)
            </Text>
          </SummonerInfo>
        </SummonerMainProfileWrapper>
      </InnerWrapper>
    </Container>
  );
};

const Container = styled.section`
  border-bottom: 1px solid ${(props) => props.theme.colors.gray3};
`;

const InnerWrapper = styled.div`
  width: ${(props) => props.theme.innerSizes.desktop};
  margin: 0 auto;
  box-sizing: border-box;
  padding: 20px;
`;

const SummonerMainProfileWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

const SummonerInfo = styled.div`
  margin-left: 32px;
`;

export default observer(SummonerProfile);
