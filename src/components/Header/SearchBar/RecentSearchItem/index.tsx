import theme from '@src/styles/theme';
import React from 'react';
import styled from 'styled-components';
import Text from '@src/components/common/Text';

type Props = {
  keyword: string;
};

const RecentSearchItem: React.FC<Props> = ({ keyword }) => {
  return (
    <Container>
      <RecentSearchContent>
        <Text color={theme.colors.gray7} fontSize={theme.fontSizes.small}>
          {keyword}
        </Text>
      </RecentSearchContent>

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

const RecentSearchContent = styled.div`
  cursor: pointer;
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
