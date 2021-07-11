import React from 'react';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)



function App() {
  return (
    <div className="App">
    <Router>
      <ul>
        <li><Link to='/'>Home</Link></li>

      </ul>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
