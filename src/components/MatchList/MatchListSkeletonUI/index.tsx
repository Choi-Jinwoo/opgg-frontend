import SkeletonUI from '@src/components/common/SkeletonUI';
import React from 'react';
import styled from 'styled-components';

const MatchListSkeletonUI: React.FC = () => {
  return (
    <Container>
      <Item>
        <ChampionProfile />
        <Column>
          <KDA />
          <KDARate />
        </Column>
        <ItemBox />
        <Column>
          <TeamItem />
          <TeamItem />
          <TeamItem />
          <TeamItem />
          <TeamItem />
        </Column>
      </Item>
      <Item>
        <ChampionProfile />
        <Column>
          <KDA />
          <KDARate />
        </Column>
        <ItemBox />
        <Column>
          <TeamItem />
          <TeamItem />
          <TeamItem />
          <TeamItem />
          <TeamItem />
        </Column>
      </Item>
    </Container>
  );
};

const Container = styled.div``;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * + * {
    margin-top: 4px;
  }
`;

const Item = styled(SkeletonUI)`
  margin: 12px 0px;
  background-color: ${(props) => props.theme.colors.gray2};
  border: 1px solid ${(props) => props.theme.colors.gray3};
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 80px;
  width: 690px;
  height: 124px;
`;

const ChampionProfile = styled(SkeletonUI)`
  border-radius: 50%;
  width: 46px;
  height: 46px;
`;

const KDA = styled(SkeletonUI)`
  width: 100px;
  height: 24px;
`;

const KDARate = styled(SkeletonUI)`
  width: 80px;
  height: 20px;
`;

const ItemBox = styled(SkeletonUI)`
  width: 120px;
  height: 80px;
`;

const TeamItem = styled(SkeletonUI)`
  width: 120px;
  height: 16px;
`;

export default MatchListSkeletonUI;
