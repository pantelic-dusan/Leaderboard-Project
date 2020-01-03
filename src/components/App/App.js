import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navigation from '../Navigation'
import Scores from '../Scores'
import Search from '../Search'
import DateFilter from '../DateFilter'

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Scores} />
          <Route exact path="/search-user" component={Search} />
          <Route exact path="/date-filter" component={DateFilter} />
        </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
