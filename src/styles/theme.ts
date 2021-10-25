const theme = {
  colors: {
    gold: '#eabd56',
    amethyst: '#8c51c5',
    azure: '#1ea1f7',
    blue: '#1f8ecd',
    darkBlue: '#2c709b',
    lightRed: '#ee5a52',
    darkRed: '#d0021b',
    red: '#c6443e',
    orange: '#e19205',
    green: '#2daf7f',
    white: '#ffffff',
    black: '#242929',

    gray1: '#f2f2f2',
    gray2: '#eaeaea',
    gray3: '#cdd2d2',
    gray4: '#b6b6b6',
    gray5: '#a7a7a7',
    gray6: '#879292',
    gray7: '#5e5e5e',
    gray8: '#555555',
  },
  fontSizes: {
    large: '20px',
    regular: '16px',
    medium: '14px',
    small: '12px',
    tiny: '11px',
  },
  innerSizes: {
    desktop: '1000px',
  },
};

export default theme;

export type CustomTheme = typeof theme;
