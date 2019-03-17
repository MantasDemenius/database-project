import React, { Component } from 'react';
import { Route } from 'react-router';

import Imones from '../Imones';
import Index from '../Index';

class Content extends Component {


  render() {
    return (
      <div>
        <Route exact path='/' component={Index}></Route>
        <Route path='/imones' component={Imones}></Route>
      </div>
    );
  }
}

export default Content;
