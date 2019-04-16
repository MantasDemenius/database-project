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

  delItem = (id_IMONE) => {
    axios({
      method: 'post',
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    },
      url: '/imones/del?id=' + `${id_IMONE}`
    })
    .then(response => {
      console.log(response);
      console.log("success");
    })
    .catch(err => {
      console.log(id_IMONE);
      console.log(err);
      console.log("fail");
    });
  }

  render() {
    return this.state.items.map((item) => (
      <React.Fragment>
        <ContentItem key={item.id_IMONE} item={item} delItem={this.delItem}  />
      </React.Fragment>

    ));
  }
}

export default Imones;
