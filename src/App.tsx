import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';
import SummonerPage from './pages/SummonerPage';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Route path="/" exact>
            <SummonerPage />
          </Route>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
