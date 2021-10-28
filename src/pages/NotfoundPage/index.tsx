import Heading from '@src/components/common/Heading';
import Text from '@src/components/common/Text';
import Layout from '@src/components/common/Layout';
import React from 'react';
import theme from '@src/styles/theme';
import styled from 'styled-components';

const NotfoundPage: React.FC = () => {
  return (
    <Layout
      title="페이지를 찾을 수 없음 | OPGG"
      description="페이지를 찾을 수 없습니다"
    >
      <Container>
        <Heading color={theme.colors.azure}>페이지를 찾을 수 없습니다</Heading>
        <Text color={theme.colors.gray6}>다른 페이지로 이동해주세요</Text>
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

export default NotfoundPage;
