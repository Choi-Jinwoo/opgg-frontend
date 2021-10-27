import theme from '@src/styles/theme';
import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import Text from '@src/components/common/Text';
import CLOSE_ICON from '@src/assets/images/close-icon.png';

type Props = {
  keyword: string;
  onCloseClick: MouseEventHandler;
};

const RecentSearchItem: React.FC<Props> = ({ keyword, onCloseClick }) => {
  return (
    <Container>
      <RecentSearchContent>
        <Text color={theme.colors.gray7} fontSize={theme.fontSizes.small}>
          {keyword}
        </Text>
      </RecentSearchContent>

      <IconsWrapper>
        <CloseIcon onClick={onCloseClick} />
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

const CloseIcon = styled.img.attrs({
  src: CLOSE_ICON,
  alt: '닫기',
})`
  cursor: pointer;
`;

export default RecentSearchItem;
