import React, { Component } from 'react';
import axios from 'axios';
import './style/style.css';

import Header from './components/includes/Header';
import Content from './components/includes/Content';

class App extends Component {

  state = {
    users:[]
  }

  componentDidMount(){
    this.getUsers();
  }

  getUsers = _ => {
    axios.get('/imones')
    .then(response => {
      this.setState({users: response.data.results});
    })
    // .then(({response}) => this.setState({users: response.users}))
    .catch(error => console.log(error));
    // fetch('http://localhost:4000/clients')
    // .then(response => response.json())
    // .then(response => this.setState({ users: response.data}))
    // //.then(({response}) => this.setState({users: response.data }))
    // .catch(error => console.log(error))
  }

  showUsers = ({ id_IMONE, Pavadinimas}) => <div key={id_IMONE}>{Pavadinimas}</div>

  render() {
    const { users } = this.state;
    return (
      <div className="App">
        <Header />
        <Content />
        {users.map(this.showUsers)}


      </div>
    );
  }
}

export default App;
