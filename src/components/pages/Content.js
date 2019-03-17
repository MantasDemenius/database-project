import React, { Component } from 'react';
import { Route } from 'react-router';

import Imones from '../Imones';

class Content extends Component {


  render() {
    return (
      <div>
        <Route path='/imones' component={Imones}></Route>
      </div>
    );
  }
}

export default Content;
