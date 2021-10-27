import matchStore, { MatchFilter } from '@src/stores/matchStore';
import { observer } from 'mobx-react-lite';
import React from 'react';
import styled, { css } from 'styled-components';
import MostUsedChampions from './UsedChampions';
import PreferPositions from './PreferPositions';
import SummaryChart from './SummaryChart';

const FILTER: {
  filter: MatchFilter;
  label: string;
}[] = [
  {
    filter: 'all',
    label: '전체',
  },
  {
    filter: 'solo',
    label: '솔로게임',
  },
  {
    filter: 'free',
    label: '자유랭크',
  },
];

const MatchSummary: React.FC = () => {
  const { currentFilter } = matchStore;

  const makeFilterClickHandler = (filter: MatchFilter) => () => {
    matchStore.changeFilter(filter);
  };

  const filterItems = FILTER.map(({ filter, label }, index) => (
    <FilterItem
      key={index}
      isSelected={filter === currentFilter}
      onClick={makeFilterClickHandler(filter)}
    >
      {label}
    </FilterItem>
  ));

  return (
    <Container>
      <FilterWrapper>
        <FilterList>{filterItems}</FilterList>
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

const FilterList = styled.ul`
  display: flex;
  align-items: center;
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
