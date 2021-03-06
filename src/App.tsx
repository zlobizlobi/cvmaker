import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { Home, Shows } from './pages';
import { Navbar, Header } from './components';
import { GlobalStyle } from './styles';

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App: React.FC = () => (
  <AppContainer>
    <GlobalStyle />
    <Header>
      <Navbar />
    </Header>
    <Switch>
      <Route exact={true} path="/">
        <Home />
      </Route>
      <Route path="/shows">
        <Shows />
      </Route>
    </Switch>
  </AppContainer>
);

export default App;
