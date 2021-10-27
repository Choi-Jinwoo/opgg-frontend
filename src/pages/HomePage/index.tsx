import Heading from '@src/components/common/Heading';
import Text from '@src/components/common/Text';
import Layout from '@src/components/common/Layout';
import React from 'react';
import theme from '@src/styles/theme';
import styled from 'styled-components';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Container>
        <Heading color={theme.colors.azure}>OPGG 프론트엔드 과제</Heading>
        <Text color={theme.colors.gray6}>검색어를 입력해주세요</Text>
      </Container>
    </Layout>
  );
};

const Container = styled.section`
  margin: 28px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default HomePage;
