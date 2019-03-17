import React, { Component } from 'react';
import { Route } from 'react-router';
import './style/style.css';

import Header from './components/pages/Header';
import Content from './components/pages/Content';

class App extends Component {



  render() {
    return (
      <div className="App">
        <Header />
        <Content />



      </div>
    );
  }
}

export default App;
