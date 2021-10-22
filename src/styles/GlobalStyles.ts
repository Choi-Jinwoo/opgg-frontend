import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSizes.regular};
    background-color: ${(props) => props.theme.colors.gray2};
  }
`;

export default GlobalStyles;
