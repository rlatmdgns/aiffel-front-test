import React from "react";
import { Route } from "react-router-dom";
import Auth from './pages/Login'
import Forum from './pages/Forum'
function App() {
  return (
    <>
       <Route exact path="/" component={Auth} /> 
       <Route path="/forum" component={Forum} /> 
    </>
  );
}

export default App;

