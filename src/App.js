import React, { Component } from 'react';
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
  fetch('http://localhost:3001')
  .then(response => console.log(response))//response.json())
  .then(({response}) => this.setState({users: 'response.users'}))
  .catch(error => console.log(error));
  }
  showUsers = user => <div key={user.id}>{user.username}</div>

  render() {
    const { users} = this.state;
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
