import { MultiKillStrings, OPScores } from '@src/models/domains/Game';
import theme from '@src/styles/theme';
import React from 'react';
import styled from 'styled-components';

type MultiKillBadgeProps = {
  multiKillString: MultiKillStrings;
};

const MULTIKILL_MAP_TO_LABEL = {
  'Double Kill': '더블킬',
  'Triple Kill': '트리플킬',
  'Quadra Kill': '쿼드라킬',
  'Penta Kill': '펜타킬',
};

export const MultiKillBadge: React.FC<MultiKillBadgeProps> = ({
  multiKillString,
}) => {
  return (
    <BaseBadge
      bgColor={theme.colors.lightRed}
      borderColor={theme.colors.darkRed}
    >
      {MULTIKILL_MAP_TO_LABEL[multiKillString]}
    </BaseBadge>
  );
};

type OPScoreBadgeProps = {
  opScore: OPScores;
};

const OPSCORE_THEME = {
  MVP: {
    bgColor: '##e19205',
    borderColor: '#b88a2a',
  },
  ACE: {
    bgColor: '#8c51c5',
    borderColor: '#7f3590',
  },
};

export const OPScoreBadge: React.FC<OPScoreBadgeProps> = ({ opScore }) => {
  return (
    <BaseBadge
      bgColor={OPSCORE_THEME[opScore].bgColor}
      borderColor={OPSCORE_THEME[opScore].borderColor}
    >
      {opScore}
    </BaseBadge>
  );
};

type BaseBadgeProps = {
  bgColor: string;
  borderColor: string;
};

const BaseBadge = styled.div<BaseBadgeProps>`
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.white};
  font-size: 10px;
  border-radius: 9px;
  border 1px solid;
  height; 18px;
  padding: 0px 4px;
  border-color: ${(props) => props.borderColor};
  background-color: ${(props) => props.bgColor};
`;
