import React from 'react';
import styled from 'styled-components';

type Props = {
  width: number;
  height: number;
  src: string;
  alt: string;
};

const RoundSquareImage: React.FC<Props> = ({ src, alt, width, height }) => {
  return <Image src={src} alt={alt} width={width} height={height} />;
};

const Image = styled.img`
  width: ${(props) => props.width}px;
  border-radius: 50%;
`;

export default RoundSquareImage;