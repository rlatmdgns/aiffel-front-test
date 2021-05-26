import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Forum from './pages/Forum';
import ForumDetail from './pages/ForumDetail';
import { Header } from './components/Header';
import PrivateRoute from './helpers/PrivateRoute';
function App() {
  return (
    <Router>
      <Route path='/forum' component={Header} />
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/forum" component={Forum} />  
        <Route exact path="/forum/:id" component={ForumDetail} />
      </Switch>
    </Router>
  );
}

export default App;
