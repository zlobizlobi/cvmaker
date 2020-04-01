import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Home, Shows } from './pages'
import { Navbar, Header } from './components'
import { GlobalStyle } from './styles/globalStyles'

const App = () => (
  <div className="App">
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
  </div>
)

export default App
