import SkeletonUI from '@src/components/common/SkeletonUI';
import React from 'react';
import styled from 'styled-components';

const UsedChampionsSkeletonUI: React.FC = () => {
  return (
    <Container>
      <ItemWrapper>
        <ChampionProfile />
        <ChampionName />
      </ItemWrapper>

      <ItemWrapper>
        <ChampionProfile />
        <ChampionName />
      </ItemWrapper>

      <ItemWrapper>
        <ChampionProfile />
        <ChampionName />
      </ItemWrapper>
    </Container>
  );
};

const Container = styled.div``;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  margin: 8px 0px;
`;

const ChampionProfile = styled(SkeletonUI)`
  width: 34px;
  height: 34px;
  border-radius: 50%;
`;

const ChampionName = styled(SkeletonUI)`
  height: 16px;
  width: 120px;
  margin-left: 4px;
`;

export default UsedChampionsSkeletonUI;
