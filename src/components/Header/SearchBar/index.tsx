import React from 'react';
import styled from 'styled-components';
import SearchButton from './SearchButton';

const SEARCH_PLACEHOLDER = '소환사명, 챔피언···';

const SearchBar: React.FC = () => {
  return (
    <Container>
      <SearchInput />
      <SearchButton />
    </Container>
  );
};

const Container = styled.div`
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
