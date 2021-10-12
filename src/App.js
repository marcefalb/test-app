import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'

import './assets/styles/App.css'

const Main = lazy(() => import('./pages/Main'))
const Repo = lazy(() => import('./pages/Repo'))


function App() {
  return (
    <Router>
      <Header/>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Switch>
          <Route exact path='/' component={Main}/>
          <Route path='/Repo/:owner/:name' component={Repo}/>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default App