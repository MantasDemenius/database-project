import React, { Component } from 'react';
import axios from 'axios';
import ContentItem from './ContentItem';

class Imones extends Component {
  state = {
    items:[]
  }

  componentDidMount(){
    this.getItems();
  }

  getItems = _ => {
    axios.get('/imones')
    .then(response => {
      this.setState({items: response.data.results});
    })
    .catch(error => console.log(error));
  }

  render() {
    return this.state.items.map((item) => (
      <React.Fragment>
        <ContentItem key={item.id_IMONE} item={item} />
      </React.Fragment>

    ));
  }
}

export default Imones;
