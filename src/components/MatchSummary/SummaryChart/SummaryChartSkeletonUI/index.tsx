import SkeletonUI from '@src/components/common/SkeletonUI';
import React from 'react';
import styled from 'styled-components';

const SummaryChartSkeletonUI: React.FC = () => {
  return (
    <Container>
      <Chart />
      <KDARate />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Chart = styled(SkeletonUI)`
  border-radius: 50%;
  width: 100px;
  height: 100px;
`;

const KDARate = styled(SkeletonUI)`
  width: 80px;
  height: 20px;
  margin-left: 8px;
`;

export default SummaryChartSkeletonUI;
