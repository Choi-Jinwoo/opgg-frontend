import React, { useState } from 'react';

import styled, { css } from 'styled-components';
import MostChampions from './MostChampions';
import RecentChampions from './RecentChampions';

enum FilterTypes {
  CHAMPION_WINNING_RATE,
  RECENT_RANK_WINNING_RATE,
}

const MostInfo: React.FC = () => {
  const [filterType, setFilterType] = useState<FilterTypes>(
    FilterTypes.CHAMPION_WINNING_RATE,
  );

  const makeFilterButtonClickHandler = (type: FilterTypes) => () => {
    setFilterType(type);
  };

  return (
    <Container>
      <ButtonWrapper>
        <FilterButton
          onClick={makeFilterButtonClickHandler(
            FilterTypes.CHAMPION_WINNING_RATE,
          )}
          isSelected={filterType === FilterTypes.CHAMPION_WINNING_RATE}
        >
          챔피언 승률
        </FilterButton>
        <FilterButton
          onClick={makeFilterButtonClickHandler(
            FilterTypes.RECENT_RANK_WINNING_RATE,
          )}
          isSelected={filterType === FilterTypes.RECENT_RANK_WINNING_RATE}
        >
          7일간 랭크 승률
        </FilterButton>
      </ButtonWrapper>
      {filterType === FilterTypes.CHAMPION_WINNING_RATE && <MostChampions />}
      {filterType === FilterTypes.RECENT_RANK_WINNING_RATE && (
        <RecentChampions />
      )}
    </Container>
  );
};

const Container = styled.section`
  border: 1px solid ${(props) => props.theme.colors.gray3};
  border-radius: 2px;
  width: 300px;
  box-sizing: border-box;
  margin-top: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;

type FilterButtonProps = {
  isSelected: boolean;
};

const FilterButton = styled.button<FilterButtonProps>`
  cursor: pointer;
  width: 50%;
  border: none;
  outline: none;
  padding: 16px 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.gray3};
  background-color: ${(props) => props.theme.colors.gray1};
  color: ${(props) => props.theme.colors.gray6};

  ${(props) =>
    props.isSelected &&
    css`
      border-bottom: none;
      background-color: ${(props) => props.theme.colors.gray2};
      color: ${(props) => props.theme.colors.gray7};
      font-weight: bold;

      &:first-child {
        border-right: 1px solid ${(props) => props.theme.colors.gray3};
      }

      &:last-child {
        border-left: 1px solid ${(props) => props.theme.colors.gray3};
      }
    `}}

`;

export default MostInfo;
