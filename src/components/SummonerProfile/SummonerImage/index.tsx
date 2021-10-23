import React from 'react';
import styled from 'styled-components';
import BG_LEVEL_BOX from '@src/assets/images/bg-levelbox.png';

type Props = {
  profileImageUrl: string;
  profileBorderImageUrl: string;
  level: number;
};

const SummonerImage: React.FC<Props> = ({
  profileBorderImageUrl,
  profileImageUrl,
  level,
}) => {
  return (
    <Container>
      <BorderImage image={profileBorderImageUrl} />
      <Image src={profileImageUrl} />
      <LevelBadge>{level}</LevelBadge>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

type BorderImageProps = {
  image: string;
};

const BorderImage = styled.div<BorderImageProps>`
  position: absolute;
  background: no-repeat url(${(props) => props.image});
  width: 120px;
  height: 120px;
  top: -10px;
  left: -10px;
`;

const Image = styled.img`
  width: 100px;
`;

const LevelBadge = styled.span`
  background: no-repeat url(${BG_LEVEL_BOX});
  position: relative;
  top: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 24px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.gold};
`;

export default SummonerImage;
