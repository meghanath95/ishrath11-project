import React from 'react';
import './App.css';
import Nav from './Nav';
import Italian from './Italian';
import Indian from './Indian'; 
import Mexican from './Mexican'
import { BrowserRouter as Router, Switch, Route}  from 'react-router-dom';


function App() {
  return (
    <Router> 
      
      <div className="App">
       <Nav />
       <Switch>
       <Route path="/" exact component={Home} />
         <Route path="/Italian" component={Italian} />
         <Route path="/Indian" component={Indian} />
         <Route path="/Mexican" component={Mexican} />
       </Switch>
      </div>
    </Router>
  );

}


const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);


export default App;
