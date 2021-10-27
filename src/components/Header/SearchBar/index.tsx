import DropDown from '@src/components/common/DropDown';
import useDropDown from '@src/hooks/useDropDown';
import useInput from '@src/hooks/useInput';
import recentSearchStore from '@src/stores/recentSearchStore';
import React, { KeyboardEventHandler } from 'react';
import styled from 'styled-components';
import RecentSearchList from './RecentSearchList';
import SearchButton from './SearchButton';
import { useHistory } from 'react-router-dom';

const SEARCH_PLACEHOLDER = '소환사명, 챔피언···';
const SEARCH_BAR_ID = 'header-search-bar';

const SearchBar: React.FC = () => {
  const history = useHistory();
  const [keyword, onKeywordChange, clearKeyword] = useInput();
  const [isDropDownVisible, makeDropDownVisible, makeDropDownInvisible] =
    useDropDown(false, `#${SEARCH_BAR_ID}`);

  const onSearchInputFocus = () => {
    makeDropDownVisible();
  };

  const onSearch = (keyword: string) => {
    if (keyword.trim().length <= 0) return;

    recentSearchStore.add(keyword);
    clearKeyword();
    makeDropDownInvisible();

    history.push(`?summoner=${keyword}`);
  };

  const onSearchClick = () => {
    onSearch(keyword);
  };

  const onEnterPress: KeyboardEventHandler = (e) => {
    if (e.key === 'Enter') {
      onSearch(keyword);
    }
  };

  return (
    <Container id={SEARCH_BAR_ID}>
      <SearchInput
        onFocus={onSearchInputFocus}
        onKeyPress={onEnterPress}
        value={keyword}
        onChange={onKeywordChange}
      />
      <SearchButton onClick={onSearchClick} />
      <DropDown isVisible={isDropDownVisible} top={36}>
        <RecentSearchList search={onSearch} />
      </DropDown>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  width: 260px;
  border-radius: 2px;
  padding-right: 16px;
`;

const SearchInput = styled.input.attrs({
  type: 'input',
  placeholder: SEARCH_PLACEHOLDER,
})`
  flex: 1;
  border: none;
  outline: none;
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.gray7};
  padding: 8px 16px;
  border-radius: 2px;

  &::placeholder {
    color: ${(props) => props.theme.colors.gray4};
  }
`;

export default SearchBar;
