import React from 'react';
import styled from 'styled-components';

type Props = {
  // pixel
  width?: number;
  bgColor?: string;
  src: string;
  alt: string;
};

const RoundImage: React.FC<Props> = ({
  src,
  alt,
  width = 46,
  bgColor = '',
}) => {
  return (
    <Image src={src} alt={alt} width={width} height={width} bgColor={bgColor} />
  );
};

type ImageProps = {
  bgColor: string;
};

const Image = styled.img<ImageProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
`;

export default RoundImage;
