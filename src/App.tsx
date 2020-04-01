import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Shows } from './pages'
import { Navbar, Header } from './components'
import { GlobalStyle } from './styles/globalStyles'
import styled from 'styled-components'

const AppContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const App = () => (
  <AppContainer>
    <GlobalStyle />
    <Header>
      <Navbar />
    </Header>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/shows">
        <Shows />
      </Route>
    </Switch>
  </AppContainer>
)

export default App
