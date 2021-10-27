import Header from '@src/components/Header';
import React from 'react';
import styled from 'styled-components';

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 40px;
`;

export default Layout;
