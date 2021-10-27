import React from 'react';
import styled from 'styled-components';
import TierRank from '@src/models/domains/tierRank';
import Text from '@src/components/common/Text';
import theme from '@src/styles/theme';

type Props = {
  tier: TierRank;
};

const TierBadge: React.FC<Props> = ({ tier }) => {
  return (
    <Container>
      <Text
        color={theme.colors.gray7}
        fontSize={theme.fontSizes.tiny}
        fontWeight="bold"
      >
        {tier.seasonString}
      </Text>
      <Text
        color={theme.colors.gray7}
        fontSize={theme.fontSizes.tiny}
        marginLeft={4}
      >
        {tier.tier}
      </Text>
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  padding: 2px 4px;
  background-color: ${(props) => props.theme.colors.gray1};
  border: 1px solid ${(props) => props.theme.colors.gray3};
  border-radius: 2px;
`;

export default TierBadge;
