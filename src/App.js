import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//import './style/style.css';

import Header from './components/includes/Header';
import index from './components/pages/Index.js';
import ImoneAdd from './components/forms/ImoneAdd';
import RestoranasAdd from './components/forms/RestoranasAdd';
import MainPath from './components/pages/MainPath';
import SuppliersAdd from './components/forms/SuppliersAdd';
import ClientsAdd from './components/forms/ClientsAdd';
import CommentsAdd from './components/forms/CommentsAdd';

class App extends Component {

  render() {
    const projectUrl = "database-project";
    return (
      <div className="App">
        <Header />
            <Route exact path='database-project/' component={index}></Route>
            <Route path='database-project/:mainPath' component={MainPath}></Route>
            <Route path='database-project/Companies/add' component={ImoneAdd} />
            <Route path='database-project/Restaurants/add' component={RestoranasAdd} />
            <Route path='database-project/Suppliers/add' component={SuppliersAdd} />
            <Route path='database-project/Clients/add' component={ClientsAdd} />
            <Route path='database-project/Comments/add' component={CommentsAdd} />

      </div>
    );
  }
}
export default App;
