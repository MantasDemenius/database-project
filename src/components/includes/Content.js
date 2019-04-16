import React, { Component } from 'react';
import { Route } from 'react-router';

import Imones from '../pages/Imones';
import Index from '../pages/Index';
import Edit from '../forms/Edit';

class Content extends Component {


  render() {
    return (
        <div className="content">
          <Route exact path='/' component={Index}></Route>
          <Route path='/imones' component={Imones}></Route>
          <Route path='/imones/edit' component={Edit}></Route>
        </div>
    );
  }
}

export default Content;
