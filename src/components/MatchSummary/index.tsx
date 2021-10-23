import React from 'react';
import styled from 'styled-components';
import MostUsedChampions from './MostUsedChampions';
import PreferPositions from './PreferPositions';
import SummaryChart from './SummaryChart';

const MatchSummary: React.FC = () => {
  return (
    <Container>
      <SectionWrapper>
        <SummaryChart />
      </SectionWrapper>

      <SectionWrapper>
        <MostUsedChampions />
      </SectionWrapper>

      <SectionWrapper>
        <PreferPositions />
      </SectionWrapper>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
`;

const SectionWrapper = styled.div`
  padding: 20px;
  border-right: 1px solid ${(props) => props.theme.colors.gray3};

  &:last-child {
    border: none;
  }
`;

export default MatchSummary;
