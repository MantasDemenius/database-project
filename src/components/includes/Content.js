import React, { Component } from 'react';
import { Route } from 'react-router';

import Imones from '../pages/Imones';
import Index from '../pages/Index';

class Content extends Component {


  render() {
    return (
      <content>
        <div className="content">
          <Route exact path='/' component={Index}></Route>
          <Route path='/imones' component={Imones}></Route>
        </div>
      </content>
    );
  }
}

export default Content;
