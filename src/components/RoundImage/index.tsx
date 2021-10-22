import React from 'react';
import styled from 'styled-components';

type Props = {
  // pixel
  width?: number;
  src: string;
  alt: string;
};

const RoundImage: React.FC<Props> = ({ src, alt, width = 46 }) => {
  return <Image src={src} alt={alt} width={width} />;
};

const Image = styled.img`
  width: ${(props) => props.width}px;
  border-radius: 50%;
`;

export default RoundImage;
