import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import RecentSearchItem from '../RecentSearchItem';
import recentSearchStore from '@src/stores/recentSearchStore';
import { observer } from 'mobx-react';

const RecentSearchList: React.FC = () => {
  const { searchKeywords } = recentSearchStore;

  const makeCloseClickHandler: (keyword: string) => MouseEventHandler =
    (keyword) => (e) => {
      e.stopPropagation();
      recentSearchStore.remove(keyword);
    };

  if (searchKeywords.length <= 0) {
    return <NoRecentSearch>최근 검색한 소환사가 없습니다</NoRecentSearch>;
  }

  const recentSearchItems = searchKeywords.map((keyword) => (
    <RecentSearchItem
      keyword={keyword}
      key={keyword}
      onCloseClick={makeCloseClickHandler(keyword)}
    />
  ));

  return <Container>{recentSearchItems}</Container>;
};

const Container = styled.ul`
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.white};
`;

const NoRecentSearch = styled.div`
  border-radius: 2px;
  background-color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray7};
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default observer(RecentSearchList);
