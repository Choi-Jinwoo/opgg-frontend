import matchStore, { FilterTypes } from '@src/stores/matchStore';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled, { css } from 'styled-components';
import MostUsedChampions from './MostUsedChampions';
import PreferPositions from './PreferPositions';
import SummaryChart from './SummaryChart';

const FILTER: {
  key: FilterTypes;
  label: string;
}[] = [
  {
    key: 'all',
    label: '전체',
  },
  {
    key: 'solo',
    label: '솔로게임',
  },
  {
    key: 'free',
    label: '자유랭크',
  },
];

const MatchSummary: React.FC = () => {
  const { filterType } = matchStore;

  const makeFilterClickHandler = (key: FilterTypes) => () => {
    matchStore.selectFilter(key);
  };

  const filters = FILTER.map(({ key, label }, index) => (
    <FilterItem
      key={index}
      isSelected={key === filterType}
      onClick={makeFilterClickHandler(key)}
    >
      {label}
    </FilterItem>
  ));

  return (
    <Container>
      <FilterWrapper>
        <Filters>{filters}</Filters>
      </FilterWrapper>

      <SummaryWrapper>
        <SectionWrapper>
          <SummaryChart />
        </SectionWrapper>

        <SectionWrapper>
          <MostUsedChampions />
        </SectionWrapper>

        <SectionWrapper>
          <PreferPositions />
        </SectionWrapper>
      </SummaryWrapper>
    </Container>
  );
};

const Container = styled.section`
  border: 1px solid ${(props) => props.theme.colors.gray3};
  width: 690px;
  box-sizing: border-box;
  margin-bottom: 20px;
`;

const FilterWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.gray1};
  border-bottom: 1px solid ${(props) => props.theme.colors.gray3};
  padding: 0px 20px;
`;

const Filters = styled.ul`
  display: flex;
  algin-items: center;
  & > * + * {
    margin-left: 20px;
  }
`;

type FilterItemProps = {
  isSelected: boolean;
};

const FilterItem = styled.li<FilterItemProps>`
  cursor: pointer;
  padding: 8px 4px;

  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.gray8};

  ${(props) =>
    props.isSelected &&
    css`
      color: ${(props) => props.theme.colors.blue};
      border-bottom: 2px solid ${(props) => props.theme.colors.blue};
    `}
`;

const SummaryWrapper = styled.div`
  display: flex;
`;

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 24px;
  border-right: 1px solid ${(props) => props.theme.colors.gray3};

  &:last-child {
    border: none;
  }
`;

export default observer(MatchSummary);
