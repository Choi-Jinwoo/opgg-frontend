import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SummonerPage from './pages/SummonerPage';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={() => <div>hi</div>} />
            <Route path="/summoner" exact component={SummonerPage} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
