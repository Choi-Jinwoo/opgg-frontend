import Header from '@src/components/Header';
import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';

type Props = {
  title: string;
  description: string;
};

const Layout: React.FC<Props> = ({ children, title, description }) => {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>

      <Header />
      {children}
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 40px;
`;

export default Layout;
