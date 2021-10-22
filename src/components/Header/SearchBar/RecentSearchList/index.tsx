import recentSearchStorage from '@src/storage/recentSearchStorage';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import RecentSearchItem from '../RecentSearchItem';

const RecentSearchList: React.FC = () => {
  // MobX를 통한 상태관리
  const recentSearchKeywords = useMemo(
    () => recentSearchStorage.read() ?? [],
    [],
  );

  if (recentSearchKeywords.length <= 0) {
    return <NoRecentSearch>최근 검색한 소환사가 없습니다</NoRecentSearch>;
  }

  const recentSearchItems = recentSearchKeywords.map(() => (
    <RecentSearchItem key={0} />
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

export default RecentSearchList;
