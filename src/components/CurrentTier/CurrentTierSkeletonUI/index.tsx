import SkeletonUI from '@src/components/common/SkeletonUI';
import React from 'react';
import styled from 'styled-components';

const CurrentTierSkeletonUI: React.FC = () => {
  return (
    <Container>
      <TierBox />
      <TierBox />
    </Container>
  );
};

const Container = styled.div`
  & > * + * {
    margin-top: 8px;
  }
`;

const TierBox = styled(SkeletonUI)`
  width: 300px;
  height: 130px;
`;

export default CurrentTierSkeletonUI;
