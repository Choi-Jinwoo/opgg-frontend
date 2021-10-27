import SkeletonUI from '@src/components/common/SkeletonUI';
import React from 'react';
import styled from 'styled-components';

const SummonerProfileSkeletonUI: React.FC = () => {
  return (
    <Container>
      <TierWrapper>
        <Tier />
        <Tier />
      </TierWrapper>
      <ProfileWrapper>
        <Profile />
        <SummonerName />
      </ProfileWrapper>
    </Container>
  );
};

const Container = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: ${(props) => props.theme.innerSizes.desktop};
  margin: 0 auto;
`;

const TierWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 8px;
`;

const ProfileWrapper = styled.div`
  display: flex;
`;

const Profile = styled(SkeletonUI)`
  width: 120px;
  height: 120px;
`;

const Tier = styled(SkeletonUI)`
  width: 60px;
  height: 20px;
  margin-left: 4px;
`;

const SummonerName = styled(SkeletonUI)`
  margin-left: 16px;
  width: 120px;
  height: 28px;
`;

export default SummonerProfileSkeletonUI;
