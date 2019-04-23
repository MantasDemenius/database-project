import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//import './style/style.css';

import Header from './components/includes/Header';
import index from './components/pages/';
import ImoneAdd from './components/forms/ImoneAdd';
// import Restoranai from './components/pages/Restoranai';
import MainPath from './components/pages/MainPath';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
            <Route exact path='/' component={index}></Route>
            <Route path='/:mainPath' component={MainPath}></Route>
            <Route path='/imone/add' component={ImoneAdd} />
      </div>
    );
  }
}
export default App;
