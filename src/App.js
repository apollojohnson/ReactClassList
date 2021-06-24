import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './views/About';
import Home from './views/Home'
import Contact from './views/Contact'

export default class App extends Component {
constructor(){
  super();
  this.state = {
    kekambas: []
  }
  console.log("constructor has been successfully created")
}
componentDidMount(){
  console.log("Compon mounted")
  fetch('https://kekambas-bs.herokuapp.com/kekambas')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    this.setState({kekambas: data});
  })
}

  render() {
    return (
      <div>
        <Navbar />
        <main className="container">
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/about'> 
              <About />
            </Route>
            <Route exact path='/contact'>
              <Contact kekambas={this.state.kekambas} />
            </Route>
          </Switch>
        </main>
      </div>
    )
  }
}
