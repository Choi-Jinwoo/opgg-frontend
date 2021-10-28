import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import SEARCH_ICON from '@src/assets/icons/search-icon.svg';

type Props = {
  onClick: MouseEventHandler;
};

const SearchButton: React.FC<Props> = ({ onClick }) => {
  return (
    <Button onClick={onClick} aria-label="Search Button">
      <ButtonImage src={SEARCH_ICON} alt="검색 버튼" />
    </Button>
  );
};

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  width: 32px;
  cursor: pointer;
`;

const ButtonImage = styled.img`
  width: 100%;
`;

export default SearchButton;
