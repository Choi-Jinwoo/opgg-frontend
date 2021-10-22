import React from 'react';
import styled from 'styled-components';
import SEARCH_ICON from '@src/assets/icons/search-icon.svg';

const SearchButton: React.FC = () => {
  return (
    <Button>
      <ButtonImage src={SEARCH_ICON} />
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