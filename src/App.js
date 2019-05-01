import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//import './style/style.css';

import Header from './components/includes/Header';
import index from './components/pages/';
import ImoneAdd from './components/forms/ImoneAdd';
import RestoranasAdd from './components/forms/RestoranasAdd';
import MainPath from './components/pages/MainPath';
import SuppliersAdd from './components/forms/SuppliersAdd';
import ClientsAdd from './components/forms/ClientsAdd';
import CommentsAdd from './components/forms/CommentsAdd';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
            <Route exact path='/' component={index}></Route>
            <Route path='/:mainPath' component={MainPath}></Route>
            <Route path='/Companies/add' component={ImoneAdd} />
            <Route path='/Restaurants/add' component={RestoranasAdd} />
            <Route path='/Suppliers/add' component={SuppliersAdd} />
            <Route path='/Clients/add' component={ClientsAdd} />
            <Route path='/Comments/add' component={CommentsAdd} />

      </div>
    );
  }
}
export default App;
