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
import ReportOrder from './components/pages/ReportOrder';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Header />
            <Route exact path='/database-project/' component={index}></Route>
            <Route path='/database-project/List/:mainPath' component={MainPath}></Route>
            <Route path='/database-project/List/Companies/add' component={ImoneAdd} />
            <Route path='/database-project/List/Restaurants/add' component={RestoranasAdd} />
            <Route path='/database-project/List/Suppliers/add' component={SuppliersAdd} />
            <Route path='/database-project/List/Clients/add' component={ClientsAdd} />
            <Route path='/database-project/List/Comments/add' component={CommentsAdd} />
            <Route path='/database-project/Report/Order' component={ReportOrder} />
      </div>
    );
  }
}
export default App;
