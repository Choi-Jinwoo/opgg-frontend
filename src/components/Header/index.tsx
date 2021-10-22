import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const Header: React.FC = () => {
  return (
    <Container>
      <Inner>
        <SearchBar />
      </Inner>
    </Container>
  );
};

const Container = styled.header`
  height: 97px;
  background-color: ${(props) => props.theme.colors.azure};
`;

const Inner = styled.div`
  margin: 0 auto;
  width: ${(props) => props.theme.innerSizes.desktop};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default Header;
