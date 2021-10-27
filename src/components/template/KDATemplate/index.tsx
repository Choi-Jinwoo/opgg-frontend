import React from 'react';
import styled from 'styled-components';

type Props = {
  kill: number | string;
  death: number | string;
  assist: number | string;
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
