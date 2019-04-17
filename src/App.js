import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//import './style/style.css';

import Header from './components/includes/Header';
import Index from './components/pages/Index';
import Imones from './components/pages/Imones';
// import Edit from './components/forms/Edit';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
            <Route exact path='/' component={Index}></Route>
            <Route path='/imones' component={Imones}></Route>

      </div>
    );
  }
}
// <Route path='/imones/edit' component={Edit}></Route>
export default App;
