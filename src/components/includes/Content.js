import React, { Component } from 'react';
import { Route } from 'react-router';

import Imones from '../pages/Imones';
import Index from '../pages/Index';

class Content extends Component {


  render() {
    return (
        <div className="content">
          <Route exact path='/' component={Index}></Route>
          <Route path='/imones' component={Imones}></Route>
        </div>
    );
  }
}

export default Content;
