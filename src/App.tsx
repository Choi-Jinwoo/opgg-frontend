import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SummonerPage from './pages/SummonerPage';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import HomePage from './pages/HomePage';
import NotfoundPage from './pages/NotfoundPage';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/summoner" exact component={SummonerPage} />
            <Route component={NotfoundPage} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
