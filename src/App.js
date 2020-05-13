import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Italian from './Italian';
import Indian from './Indian'; 
import Mexican from './Mexican';
import { BrowserRouter as Router, Switch, Route}  from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
   <Nav />
   <switch>
   <Route path = "/" exact component = {Home} />
   <Route path = "/Italian" component = {Italian} />
   <Route path = "/Indian" component = {Indian} />
   <Route path = "/Mexican" component = {Mexican} />

   </switch>
    </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
)

export default App;