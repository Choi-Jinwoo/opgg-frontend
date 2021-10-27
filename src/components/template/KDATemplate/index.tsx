import React from 'react';
import styled from 'styled-components';

type Props = {
  kill: number;
  death: number;
  assist: number;
};

const KDATemplate: React.FC<Props> = ({ kill, death, assist }) => {
  return (
    <>
      {`${kill} / `}
      <DeathText>{death}</DeathText>
      {` / ${assist}`}
    </>
  );
};

const DeathText = styled.strong`
  color: ${(props) => props.theme.colors.red};
`;

export default KDATemplate;
