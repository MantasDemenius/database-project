import React, { Component } from 'react';
import './style/style.css';

import Header from './components/includes/Header';
import Content from './components/includes/Content';

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
