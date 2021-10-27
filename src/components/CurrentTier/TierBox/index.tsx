import theme from '@src/styles/theme';
import React from 'react';
import styled from 'styled-components';
import Emphasize from '../../common/Emphasize';
import Text from '../../common/Text';

type Props = {
  name: string;
  tier: string;
  imageUrl: string;
  lp: number;
  wins: number;
  loses: number;
};

const TierBox: React.FC<Props> = ({
  name,
  tier,
  imageUrl,
  lp,
  wins,
  loses,
}) => {
  return (
    <Container>
      <TierImage src={imageUrl} />
      <TierInfoWrapper>
        <Text fontSize={theme.fontSizes.tiny} color={theme.colors.gray6}>
          {name}
        </Text>
        <Text fontSize={theme.fontSizes.tiny}>총 {wins + loses}게임</Text>
        <Text
          fontSize={theme.fontSizes.medium}
          color={theme.colors.blue}
          fontWeight="bold"
          marginTop={8}
          marginBottom={8}
        >
          {tier}
        </Text>
        <Text fontSize={theme.fontSizes.small}>
          <Emphasize color={theme.colors.black}>{lp} LP</Emphasize>
          <Text
            fontSize={theme.fontSizes.small}
            marginLeft={4}
          >{`${wins}승 ${loses}패`}</Text>
        </Text>
        <Text fontSize={theme.fontSizes.small} color={theme.colors.gray6}>
          {`승률 ${((wins / (loses + wins)) * 100).toFixed(0)}%`}
        </Text>
      </TierInfoWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  box-sizing: border-box;
  background-color: ${(props) => props.theme.colors.gray1};
  border: 1px solid ${(props) => props.theme.colors.gray3};
  border-radius: 2px;
  padding: 12px 0px;
`;

const TierImage = styled.img`
  width: 104px;
  height: 104px;
`;

const TierInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;

export default TierBox;
