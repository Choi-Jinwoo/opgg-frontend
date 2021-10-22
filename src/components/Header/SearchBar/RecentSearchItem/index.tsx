import theme from '@src/styles/theme';
import React from 'react';
import styled from 'styled-components';
import Text from '@src/components/Text';

const RecentSearchItem: React.FC = () => {
  return (
    <Container>
      <Text color={theme.colors.gray7} fontSize={theme.fontSizes.small}>
        실버판테온
      </Text>

      <IconsWrapper>
        <span>O</span>
        <span>X</span>
      </IconsWrapper>
    </Container>
  );
};

const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > * + * {
    margin-left: 8px;
  }
`;

export default RecentSearchItem;
