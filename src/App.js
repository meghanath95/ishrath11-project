import React, { Component } from 'react';
import './App.css';
//import Nav from './Nav';
//import Italian from './Italian';
//import Indian from './Indian'; 
//import Mexican from './Mexican';
import { BrowserRouter as Router, Switch, Route}  from 'react-router-dom';


class DynamicImport extends Component {
  state = {
    component: null
  }
  componentDidMount () {
    this.props.load()
      .then((component) => {
        this.setState(() => ({
          component: component.default ? component.default : component
        }))
      })
  }
  render() {
    return this.props.children(this.state.component)
  }
}


//Nav bar
const Nav = (props) => (
  <DynamicImport load={() => import('./Nav')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)



//Italian
const Italian = (props) => (
  <DynamicImport load={() => import('./Italian')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)


//Indian
const Indian = (props) => (
  <DynamicImport load={() => import('./Indian')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)


//Mexican 
const Mexican = (props) => (
  <DynamicImport load={() => import('./Mexican')}>
    {(Component) => Component === null
      ? <p>Loading</p>
      : <Component {...props} />}
  </DynamicImport>
)





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





