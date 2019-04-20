import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//import './style/style.css';

import Header from './components/includes/Header';
import index from './components/pages/';
import Imones from './components/pages/Imones';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
            <Route exact path='/' component={index}></Route>
            <Route path='/imone' component={Imones}></Route>
      </div>
    );
  }
}
export default App;
